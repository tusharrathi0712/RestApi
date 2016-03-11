var express = require('express');
var router = express.Router();
               //list users
var options = {
    host: 'localhost',
    	port: 3000,
    	  path: '/users',
    	  method: 'GET'
};

router.get(options, function (req, res) {
    
	 
	
	var data = "";
    res.on("data", function (chunk) {
        data += chunk;
    });
     
    
    res.render('users',{data:data} );
    console.log(data);
   /* res.on("end", function (res) {
    	
    	 //res.render('users',{data:data});
        console.log(data);
    }); */
});

module.exports = router;




















 
              //using id
/*var options = {
	    host: 'localhost',
	    	port: 3000,
	    	  path: '/users/103',
	};
http.get(options, function (res) {
    var data = "";
   res.on("data", function (chunk) {
        data += chunk;
    });
   res.on("end", function () {
        console.log(data);
    });
});


         //post
var querystring = require('querystring');
var postData = querystring.stringify({
	 firstname : 'ramesh',
	 lastname : 'ta',
	 email : 'ramesh@cybage.com',
		 id :7
});
var options = {
		 host: 'localhost',
	    	port: 3000,
	    	  path: '/users',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length':Buffer.byteLength(postData)
  }
};
var req = http.request(options, function(res)  {
	 res.setEncoding('utf8');
	 res.on('data', function (chunk) {
	 console.log("body: " + chunk);
	    });
	});
	req.write(postData);
	req.end();

	
	//Delete
	var querystring = require('querystring');
	var deleteData = querystring.stringify({
		 firstname : 'rashmi',
		 lastname : 'ta',
		 email : 'rashmikasar95@cybage.com',
			 id :7
	});
	var options = {
			 host: 'localhost',
		    	port: 3000,
		    	  path: '/users',
	  method: 'DELETE',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length':Buffer.byteLength(deleteData)
	  }
	};
	var req = http.request(options, function(res)  {
		 res.setEncoding('utf8');
		 res.on('data', function (chunk) {
		 console.log("body: " + chunk);
		    });
		});
		req.write(deleteData);
		req.end();
		
		
		
         //delete by using id
		var querystring = require('querystring');
		var deleteData = querystring.stringify({
			 id :103
		});
		var options = {
				 host: 'localhost',
			    	port: 3000,
			    	  path: '/users/id',
		  method: 'DELETE',
		  headers: {
		    'Content-Type': 'application/json',
		    'Content-Length':Buffer.byteLength(deleteData)
		  }
		};
		var req = http.request(options, function(res)  {
			 res.setEncoding('utf8');
			 res.on('data', function (chunk) {
			
				 console.log("body: " + chunk);
			    });
			});
			req.write(deleteData);
			req.end();
	
	
			
	//update data
			var querystring = require('querystring');
			var putData = querystring.stringify({
				firstname :'asawari',
				lastname  : 'buche',
				email     : 'asawarib@cybage.com',
					id:32
			});
			var options = {
					 host: 'localhost',
				    	port: 3000,
				    	  path: '/users',
			  method: 'put',
			  headers: {
			    'Content-Type': 'application/json',
			    'Content-Length':Buffer.byteLength(putData)
			  }
			};
			var req = http.request(options, function(res)  {
				 res.setEncoding('utf8');
				 res.on('data', function (chunk) {
				 console.log("body: " + chunk);
				    });
				});
				req.write(putData);
				req.end();
		
			*/
	