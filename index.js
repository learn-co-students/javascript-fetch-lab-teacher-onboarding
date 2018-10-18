function getIssues() {
  const repo = 'bubbaspaarx/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showIssues(json) {
  const issueList = document.getElementById('issues')
  json.forEach(issue => {
    issueItem = document.createElement('li')
    issueItem.innerText = `${issue.title} - ${issue.body}`
    issueList.append(issueItem)
  })

}

function createIssue() {
  const titleText = document.getElementById('title').value
  const bodyText = document.getElementById('body').value
  const issueData = {
    title: titleText,
    body: bodyText
  }
  const repo = 'bubbaspaarx/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(getIssues());
}

function showResults(json) {
  const resultsDiv = document.getElementById('results')
  console.log(json)
  const forkedRepo = document.createElement('a')
  forkedRepo.href = json.html_url
  forkedRepo.innerText = json.name
  forkedRepo.target = "_blank"
  resultsDiv.append(forkedRepo)
  return forkedRepo
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
