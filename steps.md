#### Connect from Windows

- Open PowerShell 
Go to the folder containing your .pem file.

Example:
````
cd Downloads
````
Example:
````
ssh -i my-key.pem ubuntu@13.234.xx.xx
````
Connect:
````
 ssh -i "pair.pem" ubuntu@13.207.55.173
````
You'll see something like:
````
ubuntu@ip-172-31-xx-xx:~$
````
#### Install Node.js
````
sudo apt update
sudo apt install nodejs npm -y
````
Check:
````
node -v
````
Upload Your Project
````
git clone .....COPY HTTPS.....
````
#### Start Your Server
npm install
npm start

or
````
node index.js
````

```
[open this then](http://13.207.55.173:8080/todos)
```
or you can change the port to 8080 , add the rule in the instance -> security groups 

