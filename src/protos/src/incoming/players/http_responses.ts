/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PlayerEntity } from "../../domain/player";

export const protobufPackage = "src.incoming.players.http_responses";

export interface GetPlayers {
  players: PlayerEntity[];
}

function createBaseGetPlayers(): GetPlayers {
  return { players: [] };
}

export const GetPlayers = {
  encode(message: GetPlayers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.players) {
      PlayerEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPlayers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPlayers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.players.push(PlayerEntity.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPlayers {
    return { players: Array.isArray(object?.players) ? object.players.map((e: any) => PlayerEntity.fromJSON(e)) : [] };
  },

  toJSON(message: GetPlayers): unknown {
    const obj: any = {};
    if (message.players) {
      obj.players = message.players.map((e) => e ? PlayerEntity.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPlayers>, I>>(base?: I): GetPlayers {
    return GetPlayers.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPlayers>, I>>(object: I): GetPlayers {
    const message = createBaseGetPlayers();
    message.players = object.players?.map((e) => PlayerEntity.fromPartial(e)) || [];
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
