# How does the web work

[source](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)

### Clients and servers

Computers connected to the web are called clients and servers. A simplified diagram of how they interact might look like this:

![img](img/simple-client-server.png)

- `Clients` are the typical web user's internet-connected devices (for example, your computer connected to your Wi-Fi, or your phone connected to your mobile network) and web-accessing software available on those devices (usually a web browser like Firefox or Chrome).
- `Servers` are computers that store webpages, sites, or apps. When a client device wants to access a webpage, a copy of the webpage is downloaded from the server onto the client machine to be displayed in the user's web browser.

### The other parts of the toolbox

The client and server we've described above don't tell the whole story. There are many other parts involved, and we'll describe them below.

For now, let's imagine that the web is a road. On one end of the road is the client, which is like your house. On the other end of the road is the server, which is a shop you want to buy something from.

![img](img/road.jpg)

In addition to the client and the server, we also need to say hello to:

- `Internet connection`: Allows you to send and receive data on the web. It's basically like the street between your house and the shop.
- `TCP/IP`: Transmission Control Protocol and Internet Protocol are communication protocols that define how data should travel across the internet. This is like the transport mechanisms that let you place an order, go to the shop, and buy your goods. In our example, this is like a car or a bike (or however else you might get around).
- `DNS`: Domain Name Servers are like an address book for websites. When you type a web address in your browser, the browser looks at the DNS to find the website's real address before it can retrieve the website. The browser needs to find out which server the website lives on, so it can send HTTP messages to the right place (see below). This is like looking up the address of the shop so you can access it.
- `HTTP`: Hypertext Transfer Protocol is an application protocol that defines a language for clients and servers to speak to each other. This is like the language you use to order your goods.
- `Component files`: A website is made up of many different files, which are like the different parts of the goods you buy from the shop. These files come in two main types:
  - `Code files`: Websites are built primarily from HTML, CSS, and JavaScript, though you'll meet other technologies a bit later.
  - `Assets`: This is a collective name for all the other stuff that makes up a website, such as images, music, video, Word documents, and PDFs.

### So what happens, exactly?

When you type a web address into your browser (for our analogy that's like walking to the shop):

1. The browser goes to the `DNS` server, and finds the real address of the server that the website lives on (you find the address of the shop).
2. The browser sends an `HTTP` request message to the server, asking it to send a copy of the website to the client (you go to the shop and order your goods). This message, and all other data sent between the client and the server, is sent across your internet connection using `TCP/IP`.
3. If the server approves the client's request, the server sends the client a "200 OK" message, which means "Of course you can look at that website! Here it is", and then starts sending the website's files to the browser as a series of small chunks called data packets (the shop gives you your goods, and you bring them back to your house).
4. The browser assembles the small chunks into a complete web page and displays it to you (the goods arrive at your door — new shiny stuff, awesome!).

### Order in which component files are parsed

From a server standpoint it is important to know the order in which these files are parsed when the response is sent back:

1. The HTML file is parsed first and, by looking inside that file, the server recognises which CSS and JavaScript files are referenced.
2. After the HTML has been parsed and a DOM tree structure has been generated from it, the linked CSS is then parsed, and styles are applied to the appropriate parts of the DOM tree. At this point, the visual representation of the page is painted to the screen, and the user sees the page.
3. The JavaScript usually gets parsed and applied to the page after the HTML and CSS.

### What is the difference between webpage, website, web server, and search engine?

- `Web page`: A web page is a simple document displayable by a browser. Such documents are written in the HTML language (which we look into in more detail in other articles). A web page can embed a variety of different types of resources such as:
  - `style information` — controlling a page's look-and-feel
  - `scripts` — which add interactivity to the page
  - `media` — images, sounds, and videos.
- `Web site`: A website is a collection of linked web pages (plus their associated resources) that share a unique domain name. Each web page of a given website provides explicit links—most of the time in the form of clickable portion of text—that allow the user to move from one page of the website to another.
- `Web server`: A web server is a computer hosting one or more websites. "Hosting" means that all the web pages and their supporting files are available on that computer. The web server will send any web page from the website it is hosting to any user's browser, per user request.
- `Search engine`: Search engines are a common source of confusion on the web. A search engine is a special kind of website that helps users find web pages from other websites.

### What is a web server ?

The term web server can refer to hardware or software, or both of them working together:

1. On the hardware side, a web server is a computer that stores web server software and a website's component files. (for example, HTML documents, images, CSS stylesheets, and JavaScript files) A web server connects to the Internet and supports physical data interchange with other devices connected to the web.
2. On the software side, a web server includes several parts that control how web users access hosted files. At a minimum, this is an HTTP server. An HTTP server is software that understands URLs (web addresses) and HTTP (the protocol your browser uses to view webpages). An HTTP server can be accessed through the domain names of the websites it stores, and it delivers the content of these hosted websites to the end user's device.

At the most basic level, whenever a browser needs a file that is hosted on a web server, the browser requests the file via HTTP. When the request reaches the correct (hardware) web server, the (software) HTTP server accepts the request, finds the requested document, and sends it back to the browser, also through HTTP. (If the server doesn't find the requested document, it returns a 404 response instead.)

![img](img/web-server.svg)

To publish a website, you need either a static or a dynamic web server.

- A `static web server`, or stack, consists of a computer (hardware) with an HTTP server (software). We call it "static" because the server sends its hosted files as-is to your browser.
- A `dynamic web server` consists of a static web server plus extra software, most commonly an application server and a database. We call it "dynamic" because the application server updates the hosted files before sending content to your browser via the HTTP server.

For example, to produce the final webpages you see in the browser, the application server might fill an HTML template with content from a database. Sites like MDN or Wikipedia have thousands of webpages. Typically, these kinds of sites are composed of only a few HTML templates and a giant database, rather than thousands of static HTML documents. This setup makes it easier to maintain and deliver the content.
