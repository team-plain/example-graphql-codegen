#!/usr/bin/env bash

# Schema
rm -f ./schema.json ./schema.graphql && curl https://core-api.uk.plain.com/graphql/v1/schema.graphql -s > schema.graphql

#  GraphQL Types
graphql-codegen