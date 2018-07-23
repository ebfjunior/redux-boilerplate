start:
	docker-compose up

clean:
	docker-compose run node rm -rf node_modules
	docker-compose down

install:
	docker-compose build
	docker-compose run node npm install
	docker-compose down