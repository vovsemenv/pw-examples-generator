export ALLURE_TOKEN=b8f164fd-1484-46c9-9089-2a35c541acd9
export ALLURE_ENDPOINT=https://testing.allure.aws.qameta.in
export ALLURE_PROJECT_ID=381
export ALLURE_LAUNCH_NAME="$(DATE) e2e main page tests local run" 
export ALLURE_RESULTS="./allure-results"

export TESTS_HOST=https://of.course.i.will.always.love.you
export TESTS_BRANCH=master
export TESTS_BROWSER=vivaldi


npm i
allurectl watch -- npm test
printenv | grep ALLURE_