import { Ratelimit } from "@upstash/ratelimit";
import dontenv from "dotenv";
import { Redis } from "@upstash/redis";

dontenv.config();

const ratelimt = new Ratelimit({
   redis: Redis.fromEnv(),
   limiter: Ratelimit.slidingWindow(100, "60 s")
});

export default ratelimt;