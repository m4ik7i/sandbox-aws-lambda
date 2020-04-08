docker run --rm -it -v "$(pwd)":/home/rust/src -v "$HOME/.cargo/registry":/home/rust/.cargo/registry ekidd/rust-musl-builder $@
