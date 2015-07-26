test: clean
	npm install
	./node_modules/.bin/mocha test.js

clean:
	rm -rf ./node_modules