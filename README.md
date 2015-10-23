# DevOps Milestone 2 
##Test Analysis

    Divya Jain (djain2)
    Shrenik Gala (sngala)
    Prashant Gupta (pgupta7)
    
####Target Project
We have used a simple **NodeJs** application for this stage of the project which acts as a library for creating random strings. We have configured **Jenkins** on our machine as our build server.

####
We are using **Mocha** as the testing framework and **Istanbul** to measure test coverage. We have used the technique of constraint based test generation to increase the coverage.
We are running the static analysis tool **PMD** on the source code. With the help of the precommit hook , we have ensured that a commit gets rejected if test coverage is less than 80% or if any of the rules in PMD analysis is failed or any security token or key is detected.

##Jenkins Configuration

####Plugins Used

- **GitHub Plugin**<br>
    This plugin enables us to use Git as the source code management tool. We have specified the path of the local Git repository in the Repository URL. 
- **PMD Plugin**<br>
    This plugin helps us collect the PMD analysis results of the project and visualises the found warnings.
- **Static Analysis Collector Plugin**<br>
    This add on plugin to PMD collects the analysis results and shows them on a combined trend graph
- **Hudson post build Plugin**<br>
    This plugin helps us execute post-build tasks such as executing scripts once the build is done.
