# MFP-DevWorks-CI


## How to use this?
To run this sample project there are two prequisites  
1. Fix the varible exports in `ciBuild/common-functions.sh` file to reflect your environment.  
2. Move the ant task definitions into  `ciBuild` folder.  
3. Move the MFP jar files into the `ciBuild/ant_dir` folder.

With these components in place run the `mfp-ci-build.sh` script on a terminal

## Fixing the variable exports   
Fix the Path to the current users home directory  
```bash
# Note : absolute dir needed for derby db creation
# eg export USER="/Users/devworks"
export USER="/Path/to/users/home/directory"
```

Fix the location of your Liberty server install   
```bash
# should point to where you want Liberty to go if unpacking the jar file   
# OR where the wlp directory is   
# eg export LIBERTY_TARGET="$USER/Documents/LibertyProfile/wlp"    
export LIBERTY_TARGET="$USER/Path/to/LibertyProfile" 
```

Fix the location of your MFP server install   
```bash
# note the configure-liberty-derby.xml file adds the /WorklightServer dir to this export 
# eg export WORKLIGHT_INSTALL_DIR="/Applications/IBM/MobileFirst_Platform_Server"
export WORKLIGHT_INSTALL_DIR="/path/to/MobileFirst_Platform_Server"
```

## Ant XML files
Copy the `build.xml` file from the CLI tooling install directory into `ciBuild`. 
For a MAC this file is located in the following dir   
`/Applications/IBM/MobileFirst-CLI/mobilefirst-cli/node_modules/generator-worklight-server/lib`   
The `configure-liberty-derby.xml` file is found in server install directory. 
`/Applications/IBM/MobileFirst_Platform_Server/WorklightServer/configuration-samples/`

## Ant Jar files
Copy the jar files in the lib directory where the CLI tooling is installed into the `ciBuild/ant_dir` folder folder along with the ant-tools directory contents.
For a MAC these files are located in the following dir   
`/Applications/IBM/MobileFirst-CLI/mobilefirst-cli/node_modules/generator-worklight-server/lib`   
`/Applications/IBM/MobileFirst-CLI/mobilefirst-cli/node_modules/generator-worklight-server/ant-tools`

You should end up with the following files in `ciBuild/ant_dir folder` for your CI scripts to work
 - ant-contrib-1.0b3.jar
 - worklight-ant-builder.jar
 - worklight-ant-deployer.jar
 - worklight-jee-library.jar