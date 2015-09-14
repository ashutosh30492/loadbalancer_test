##Loadbalancer##

A simple node script to act as a loadbalancer and redirect requests to any one of the mirror servers.

###Dependencies

```
    "agentkeepalive": "^2.0.3",
    "http": "0.0.0",
    "http-proxy": "^1.11.2",
    "request": "^2.61.0"
```


###Installation

Clone the git repository

```
git clone git@github.com:ashutosh30492/loadbalancer_test.git
```

Install dependencies

```
npm i
```

###Configurations

The list of servers goes into the adress array (index.js: 7 )

```
address = ['http://mirror1.abcd.com', 'http://mirror2.abcd.com', 'http://mirror3.abcd.com', 'http://mirror4.abcd.com'];
```

###Running

Run index.js

```
node index.js
```


