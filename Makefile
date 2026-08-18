.PHONY: build up down restart logs ps clean deploy

build:
	docker compose build

up:
	docker compose up -d

down:
	docker compose down

restart: down up

logs:
	docker compose logs -f

ps:
	docker compose ps

clean:
	docker compose down -v --remove-orphans

# Run on the remote server (e.g. via SSH) to pull the latest code and
# redeploy. Coolify can also just point at this repo directly, but this
# is handy for a manual redeploy.
deploy:
	git pull
	docker compose up -d --build
