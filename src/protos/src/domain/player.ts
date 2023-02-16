/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "src.domain.player";

export interface PlayerEntity {
  id: string;
  name: string;
  height: number;
  age: number;
  countryId: string;
}

function createBasePlayerEntity(): PlayerEntity {
  return { id: "", name: "", height: 0, age: 0, countryId: "" };
}

export const PlayerEntity = {
  encode(message: PlayerEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.height !== 0) {
      writer.uint32(29).float(message.height);
    }
    if (message.age !== 0) {
      writer.uint32(32).int32(message.age);
    }
    if (message.countryId !== "") {
      writer.uint32(42).string(message.countryId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.height = reader.float();
          break;
        case 4:
          message.age = reader.int32();
          break;
        case 5:
          message.countryId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayerEntity {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      height: isSet(object.height) ? Number(object.height) : 0,
      age: isSet(object.age) ? Number(object.age) : 0,
      countryId: isSet(object.countryId) ? String(object.countryId) : "",
    };
  },

  toJSON(message: PlayerEntity): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.height !== undefined && (obj.height = message.height);
    message.age !== undefined && (obj.age = Math.round(message.age));
    message.countryId !== undefined && (obj.countryId = message.countryId);
    return obj;
  },

  create<I extends Exact<DeepPartial<PlayerEntity>, I>>(base?: I): PlayerEntity {
    return PlayerEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PlayerEntity>, I>>(object: I): PlayerEntity {
    const message = createBasePlayerEntity();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.height = object.height ?? 0;
    message.age = object.age ?? 0;
    message.countryId = object.countryId ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
