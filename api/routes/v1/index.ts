"use strict"

import { Router } from "express"
import test from "./test"
import user from "./user"

const router = Router()

router.use("/test", test)
router.use("/user", user)

/**
 * Routing.
 */
export default router
