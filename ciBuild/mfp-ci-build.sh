#!/bin/bash -v
set -o errexit
set -o xtrace
set -o nounset



# Print debugging info useful in a ci server
echo "Printing current env for debugging purposes"
printenv
echo "Printing whoami"
whoami

export SCRIPT_DIR=`pwd`
source $SCRIPT_DIR/common-functions.sh


# Set some local variables
setEnvironment 

# build the project runtime
buildWar

# build all the adapters for the project
buildAdapters

# build all the apps
buildApps

# deploy the war file. this step includes removing any existing liberty server and derby db before 
# recreating them and reinstalling the admin services war files. Server is started by this process
deployWar

# deploy all adapter files to the remote server
deployAdapters

#deploy all the apps to the mfp server
deployApps

