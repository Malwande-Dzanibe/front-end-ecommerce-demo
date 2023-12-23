"use client"

import { NextStudio } from "next-sanity/studio";
import { client } from "@/sanity.config";

import React from 'react'

const page = () => {
  return (
    <NextStudio config={client}></NextStudio>
  )
}

export default page