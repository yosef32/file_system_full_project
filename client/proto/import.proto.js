const protoGenerator = require('proto-generator');
 
options = {
    repositoryOwner: 'yoseffyy',
    repository: 'go-file-system-server-service',
    githubProtoPath: 'proto/service.proto',
    githubBranch: 'develop'
}
 
protoGenerator.getProtoFile('service.proto' , options)
protoGenerator.generateProto('./service.proto')