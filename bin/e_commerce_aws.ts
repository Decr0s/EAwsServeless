#!/usr/bin/env node
import "source-map-support/register"
import * as cdk from "aws-cdk-lib"
import { ProductsAppStack } from "../lib/productsApp-stack"
import { ECommerceApiStack } from "../lib/ecommerceApi-stack"
import { ProductsAppLayersStack } from "../lib/productsAppLayers"

const app = new cdk.App()

const env: cdk.Environment = {
  account: "",
  region: "us-east-1",
}

const tags = {
  cost: "ECommerce",
  team: "teamName",
}

const productsAppLayersStack = new ProductsAppLayersStack(
  app,
  "ProductsAppLayers",
  {
    tags: tags,
    env: env,
  }
)
const productsAppStack = new ProductsAppStack(app, "ProductsApp", {
  tags: tags,
  env: env,
})
productsAppStack.addDependency(productsAppLayersStack)

const eCommerceApiStack = new ECommerceApiStack(app, "ECommercerApi", {
  productsFetchHandler: productsAppStack.productsFetchHandler,
  productsAdminhHandler: productsAppStack.productsAdminHandler,
  tags: tags,
  env: env,
})
eCommerceApiStack.addDependency(productsAppStack)
