# AMPLiveLoadUsingNodeJS
AMP using NodeJs where the new updates are loaded
You may chech out the instruction here https://www.ampproject.org/docs/reference/components/amp-live-list

Clone instructions:

1. Git clone "url"
2. cd into the directory
3. use <b>npm install</b>
4. then, use <b>npm start</b> to start your localhost

Use intructions:

1. Open http://localhost:3000/ on your browser
2. Using postman or any other posting mechanism, <b>post</b> to the same above url with JSON format:
      {
	      "YoutubeID": ~here put the youtube ID of the Youtube Video~
      }
      
      If this is the url:
      
      https://www.youtube.com/watch?v=<b>ttlTus58MNA</b>
      
      <i>The video ID is: ttlTus58MNA</i>
      
      So, the posting JSON would be:
      {
	      "YoutubeID": "ttlTus58MNA"
      }
      
3. Click on the "You have updates!" button that appears after a while on the page opened on your browser.
4. Give this repo a star :p
      
