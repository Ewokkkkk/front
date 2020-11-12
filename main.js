// FetchAPIを使ってweb apiからデータ取得しますよ
fetch('https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&categoryId=32&applicationId=1086382364385531386')
  .then(response => response.json())
    .then(jsonData => {
        for(var i in jsonData.result){
            var ul = document.getElementById('ul');
            var li = document.createElement('li');
            var img = document.createElement('img');
            var title = document.createElement('h3');
            img.src = jsonData.result[i].foodImageUrl;
            title.textContent = jsonData.result[i].recipeTitle;
            li.appendChild(img);
            li.appendChild(title);
            ul.appendChild(li);
            console.log(jsonData.result[i].foodImageUrl);
        }
});
fetch('https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&categoryId=30&applicationId=1086382364385531386')
  .then(response => response.json())
    .then(jsonData => {
        for(var i in jsonData.result){
            var ul = document.getElementById('ul');
            var li = document.createElement('li');
            var img = document.createElement('img');
            var title = document.createElement('h3');
            img.src = jsonData.result[i].foodImageUrl;
            title.textContent = jsonData.result[i].recipeTitle;
            li.appendChild(img);
            li.appendChild(title);
            ul.appendChild(li);
            console.log(jsonData.result[i].foodImageUrl);
        }
});