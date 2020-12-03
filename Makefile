VERSION := $(shell cat VERSION)
TARGET_ARCHS=linux/arm64,linux/amd64

build: build-frontend

publish:
	docker push antoinejaussoin/cv:${VERSION}
	docker push antoinejaussoin/cv:latest

build-frontend:
	docker build -f ./Dockerfile \
	-t antoinejaussoin/cv:${VERSION} \
	-t antoinejaussoin/cv:latest \
	.

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