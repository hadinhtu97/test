// render a variable as html in react (like .html() in jQuery)
<div id="preview" dangerouslySetInnerHTML={{ __html: variable }}></div>;

//  marked allows line break in js
marked.setOptions({
  breaks: true,
});

//  even listener in js
document.addEventListener(event, function () {}, optional(useCapture));
document.addEventListener("keydown", this.handleKeyPress);

//  settimeout function in js
setTimeOut(() => {
  something;
}, time);

//  clear all interval when dont has variable in js
for (var i = 1; i < 99999; i++) {
  window.clearInterval(i);
}

//  play pause audio in js
document.getElementById("audio").play();
document.getElementById("audio").pause();
//  add after pause to reset audio
document.getElementById("audio").currentTime = 0;

//  add event on d3 shape
on("event name", function (envent, d) {});
eventname: mouseover, mouseout, click;

/* get url */
var pathname = window.location.pathname; // Returns path only (/path/example.html)
var url = window.location.href; // Returns full URL (https://example.com/path/example.html)
var origin = window.location.origin; // Returns base URL (https://example.com)

// bcrypt async:
bcrypt.hash(string, 12, (err, hash) => {
  //exam hash: $2b$12$/51RX2Jpp11h.J9CQXUhEuMxHQTipXUyZUTi1eAGclY5KNLCzD6gy
});
bcrypt.compare(string, hash, (err, res) => {
  //res is True of False
});
// bcrypt sync:
hash = bcrypt.hashSync(string, 12); //exam hash: $2b$12$/51RX2Jpp11h.J9CQXUhEuMxHQTipXUyZUTi1eAGclY5KNLCzD6gy
res = bcrypt.compareSync(string, hash); //res is True of False

// HELMET
// remove the X-Powered-By header
helmet.hidePoweredBy({ setTo: "PHP 4.2.0" });
// sets the X-Frame-Options header.
// It restricts who can put your site in a frame.
// It has three modes: DENY, SAMEORIGIN, and ALLOW-FROM.
helmet.frameguard({ action: "deny" });
// Mitigate the Risk of Cross Site Scripting (XSS) Attacks
helmet.xssFilter();
// sets the X-Content-Type-Options header to nosniff, instructing the browser to not bypass the provided Content-Type.
helmet.noSniff();
// sets the X-Download-Options header to noopen.
// This will prevent IE users from executing downloads in the trusted site’s context.
helmet.ieNoOpen();
// tell the browsers to use HTTPS for the future requests in a specified amount of time.
helmet.hsts({ maxAge: 90 * 24 * 60 * 60, force: true });
// Disable DNS Prefetching
helmet.dnsPrefetchControl();
// If you are releasing an update for your website, and you want the users to always download the newer version, you can (try to) disable caching on client’s browser.
// It can be useful in development too. Caching has performance benefits, which you will lose, so only use this option when there is a real need.
helmet.noCache();
// By setting and configuring a Content Security Policy you can prevent the injection of anything unintended into your page.
// This will protect your app from XSS vulnerabilities, undesired tracking, malicious frames, and much more. CSP works by defining an allowed list of content sources which are trusted.
// You can configure them for each kind of resource a web page may need (scripts, stylesheets, fonts, frames, media, and so on…).
// By default, directives are wide open, so it’s important to set the defaultSrc directive as a fallback. Helmet supports both defaultSrc and default-src naming styles. The fallback applies for most of the unspecified directives.
// Exam:
helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'"],
    styleSrc: ["'self'"],
  },
});
helmet.referrerPolicy({ policy: "same-origin" });
// Configure Helmet Using the ‘parent’ helmet()
// app.use(helmet()) will automatically include all the middleware introduced above, except noCache(), and contentSecurityPolicy(), but these can be enabled if necessary.
// You can also disable or configure any other middleware individually, using a configuration object.
app.use(
  helmet({
    frameguard: {
      // configure
      action: "deny",
    },
    contentSecurityPolicy: {
      // enable and configure
      directives: {
        defaultSrc: ["self"],
        styleSrc: ["style.com"],
      },
    },
    dnsPrefetchControl: false, // disable
  })
);
