VERSION := $(shell cat VERSION)
TARGET_ARCHS=linux/arm64,linux/amd64

build: generate build-frontend

publish: generate buildx-frontend
	docker push antoinejaussoin/cv:${VERSION}
	docker push antoinejaussoin/cv:latest
	$(MAKE) update

build-frontend:
	docker build -f ./Dockerfile \
	-t antoinejaussoin/cv:${VERSION} \
	-t antoinejaussoin/cv:latest \
	.

run:
	docker run -p 3000:80 antoinejaussoin/cv:latest

update:
	ssh drawbridge 'cd /home/antoine/docker/cv && make update'

buildx-frontend:
	docker buildx build --pull --platform ${TARGET_ARCHS} \
	-f ./Dockerfile \
	-t antoinejaussoin/cv:${VERSION} \
	-t antoinejaussoin/cv:latest \
	--push .

install:
	docker run --rm --privileged multiarch/qemu-user-static --reset -p yes
	docker buildx create --name xbuilder --use
	docker buildx inspect --bootstrap

generate:
	npm run generate