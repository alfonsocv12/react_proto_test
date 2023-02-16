update-protos:
	wget https://github.com/alfonsocv12/backend_proto_test/releases/download/0.1.23/proto.zip
	unzip -o proto.zip -d .
	if [ -d "src/protos" ]; then echo "Dir exists"; else mkdir src/protos; fi

	protoc -I=. \
		--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts_proto" \
		--ts_opt=esModuleInterop=true \
		--ts_out="src/protos" \
		src/**/*.proto src/**/**/*.proto
	rm proto.zip
