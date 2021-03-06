### 0.0.5
*11/24/2013*
- Switch out [Lodash](http://lodash.com/) for [Underscore](http://underscorejs.org/) (due to lodash API inconsistencies when not using compatibility packages)
- Mode change timestamps fixed
- Use imports to concat CSS
- Resolve issues with channel capitalization
- Fix Gist stylesheet inclusion
- Use [browserify](http://browserify.org/) for client side dependency management
- Use `relay` as client side namespace instead of `irc`
- Utilize [Visibility.js](https://github.com/ai/visibility.js) to keep track of app visibility rather than `window` events
- Add automatic [JSHint](http://www.jshint.com/) linting to `grunt dev` task
- Update dependencies ([Fontawesome](http://fontawesome.io/), [Underscore](http://underscorejs.org/), [Backbone](http://backbonejs.org/), [jQuery](http://jquery.com/))
- Use [Handlebars Helper](https://github.com/SparkartGroupInc/handlebars-helper)

---

### 0.0.4
*6/2/2013*
- Optimize render time of channels with a large number of messages
- Switch out [Underscore](http://underscorejs.org/) for [Lodash](http://lodash.com/)
- Reload CSS when changed in dev mode
- Display current connection status in bottom right corner
- Optimistically update channel and connection views
- Options can be defined with URL parameters
- Options streamlined
- Improved SSL defaults
- Self-signed SSL certificates are accepted by default

---

### 0.0.3
*4/1/2013*
- Vines are displayed inline
- Vimeo video thumbnails are displayed inline
- New private messages only focus automatically when sent (not received)
- `rpl_nowaway` message now displays after an `/away` command
- Sending a message in the `status` channel no longer opens a new channel view
- `SSL` may now be specified in the "advanced options" area
- Socket.io connection is only opened when an IRC connection is made

---

### 0.0.2
*25/3/2013*
- Start tracking versions

---