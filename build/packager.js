const fs = require('fs')
const fse = require('fs-extra')
const path = require('path')
const zlib = require('zlib')
const archiver = require('archiver')

const GROUP_ID = 'com.gdn.cloud.flash'

const projectDir = path.join(__dirname, '..')
const target = 'target'
const defaultDir = 'default'
const dist = 'dist'
const versionLabel = 'version'
const healthcheckLabel = 'healthcheck'
const targetDir = path.join(projectDir, target)
module.exports = {
  doPackage: function (mode) {
    var self = this
    
    mode = mode === 'RELEASE' ? '' : ('-' + mode)

    const targetFileName = process.env.npm_package_name + '-' + process.env.npm_package_version + mode + '.zip'
    const targetResourcesFileName = process.env.npm_package_name + '-resources-' + process.env.npm_package_version + mode + '.zip'

    const archFolder = path.join(GROUP_ID + '-' + process.env.npm_package_name, process.env.npm_package_version + mode)
    const archResourcesFolder = path.join(GROUP_ID + '-' + process.env.npm_package_name + '-resources', process.env.npm_package_version + mode)

    console.log('packaging...')

    console.log('projectDir: ' + projectDir)

    fse.ensureDirSync(targetDir)

    console.log('copying default dist to target...')
    // move default dist
    fse.copySync(path.join(projectDir, defaultDir, dist), path.join(targetDir, defaultDir))

    // console.log('copying mobile dist to target...')
    // // move mobile dist
    // fse.copySync(path.join(projectDir, mobile, dist), path.join(targetDir, mobile))

    // create additional files
    this.createAdditionalFiles(process.env.npm_package_version + mode, process.env.npm_package_name)

    console.log('archiving folder..')
    // create a file to stream archive data to.
    const output = fs.createWriteStream(path.join(targetDir,
      targetFileName))
    const outputResource = fs.createWriteStream(path.join(targetDir,
      targetResourcesFileName))
    
    var self = this

    // archive main zip
    this.archive(output, function (archive) {
      const files = ['index.html', 'manifest.json', 'sw.js']
      const folders = ['launcher', 'sw']
      // default
      for (let i in files) {
        archive.file(path.join(projectDir, target, defaultDir, files[i]), {
          name: files[i],
          prefix: path.join(archFolder, defaultDir)
        })
      }
      for (let i in folders) {
        archive.directory(path.join(projectDir, target, defaultDir, folders[i]), path.join( archFolder, defaultDir, folders[i]))
      }
      // mobile
      // for (let i in files) {
      //   archive.file(path.join(projectDir, target, mobile, files[i]), {
      //     name: files[i],
      //     prefix: path.join(archFolder, mobile)
      //   })
      // }
      // for (let i in folders) {
      //   archive.directory(path.join(projectDir, target, mobile, folders[i]), path.join( archFolder, mobile, folders[i]))
      // }

      archive.file(path.join(projectDir, target, versionLabel), {
        name: versionLabel,
        prefix: path.join( archFolder)
      })
      archive.file(path.join(projectDir, target, healthcheckLabel), {
        name: healthcheckLabel,
        prefix: path.join( archFolder)
      })
    }, function (archive) {
      console.log(archive.pointer() + ' total bytes')
      console.log('archiver for app has been finalized and the output file descriptor has closed.')

      //create maven file
      self.createMaven(process.env.npm_package_version + mode, targetFileName, process.env.npm_package_name)
      
      // create resource archive
      self.archive(outputResource, function (archive) {
        archive.directory(path.join(projectDir, target, defaultDir, '/', 'static'),
          path.join( archResourcesFolder, defaultDir, '/', 'static'))
        // archive.directory(path.join(projectDir, target, mobile, '/', 'static'),
        //   path.join( archResourcesFolder, mobile, '/', 'static'))
      }, function (archive) {
        // clean up
        fse.removeSync(path.join(targetDir, defaultDir))
        // fse.removeSync(path.join(targetDir, mobile))
        fse.removeSync(path.join(targetDir, versionLabel))
        fse.removeSync(path.join(targetDir, healthcheckLabel))

        // create maven file
        self.createMaven(process.env.npm_package_version + mode, targetResourcesFileName,
          process.env.npm_package_name + '-resources', 'pom-resources.xml')

      })
    })

  },
  archive: function (output, archiveAction, closeHandler) {
    var archive = archiver('zip', {
      zlib: {level: 9} // Sets the compression level.
    });

    // listen for all archive data to be written
    output.on('close', () => closeHandler(archive));

    // good practice to catch this error explicitly
    archive.on('error', function (err) {
      throw err
    });

    // pipe archive data to the file
    archive.pipe(output)

    archiveAction(archive)

    archive.finalize()
  },
  // create maven package file
  createMaven: function (version, targetFileName, packageName, pomFile = 'pom.xml') {

    var output = '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">\n' +
      '  <modelVersion>4.0.0</modelVersion>\n' +
      '  <groupId>' + GROUP_ID + '</groupId>\n' +
      '  <artifactId>' + packageName + '</artifactId>\n' +
      '  <packaging>pom</packaging>\n' +
      '  <version>' + version + '</version>\n' +
      '  <name>' + packageName + '</name>\n' +
      '  <properties>\n' +
      '    <file>target/'+targetFileName+'</file>\n' +
      '  </properties>\n' +
      '</project>\n'

    // write file
    fs.writeFileSync(pomFile, output)
  },

  createResourcesArchive: function () {

  },

  createAdditionalFiles: function (version, packageName) {

    // health
    var healthString = '{"status":"UP"}'

    // version
    var versionString =
      'maven.groupId=' + GROUP_ID + '\n' +
      'maven.artifactId=' + packageName + '\n' +
      'maven.pom.version=' + version + '\n' +
      'maven.build.time=' + new Date().toISOString().replace('T',' ').substr(0,19)

    fs.writeFileSync(path.join(projectDir, target, healthcheckLabel), healthString)
    fs.writeFileSync(path.join(projectDir, target, versionLabel), versionString)

  }
}
