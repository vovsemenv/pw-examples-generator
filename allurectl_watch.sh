export ALLURE_TOKEN=b8f164fd-1484-46c9-9089-2a35c541acd9
export ALLURE_ENDPOINT=https://testing.allure.aws.qameta.in
export ALLURE_PROJECT_ID=381
export ALLURE_LAUNCH_NAME="e2e main page tests local run ${DATE}" 
export ALLURE_RESULTS="./allure-results"
npm i
allurectl watch -- npm test