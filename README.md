# web-start
Essential web files to start a new project:
1. HTML5
2. CSS3
3. JAVASCRIPT

Adding index.html => metatag 
METATAG =>  _Kate Morris April 13th, 2017_
they're at the top of every page in the header and are therefore the first thing seen; stick to the core minimum. Don't add meta tags you don't need — they just take up code space. The less code you have, the better. Think of your page code as a set of step-by-step directions to get somewhere, but for a browser.

These are the meta tags that should be on every page, no matter what:
- Meta content type – This tag is necessary to declare your character set for the page and should be present on every page.
```
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
```
- Title – While the title tag doesn’t start with "meta," it is in the header and contains information that's very important to SEO. You should always have a unique title tag on every page that describes the page.

- Meta description – The infamous meta description tag is used for one major purpose: to describe the page to searchers as they read through the SERPs. This tag doesn't influence ranking, but it's very important regardless. It's the ad copy that will determine if users click on your result. Keep it within 160 characters, and write it to catch the user's attention. Sell the page — get them to click on the result.

- Viewport – In this mobile world, you should be specifying the viewport. If you don’t, you run the risk of having a poor mobile experience — the Google PageSpeed Insights Tool will tell you more about it. The standard tag is:
```
<meta name=viewport content="width=device-width, initial-scale=1">
```

Adding style.css => reset css
One of the pioneers of the CSS Reset method, Eric Meyer, created a Reset stylesheet that is still in use on millions of websites today.
