import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { Kind } from 'graphql';

const fallback = 'unknown';

// biome-ignore lint/suspicious/noExplicitAny:
export function getOperationName(doc: string | TypedDocumentNode<any, any>): string {
  if (typeof doc === 'string') {
    const trimmed = doc.trim();
    const regex = /^(query|mutation) ([a-zA-Z]+)/g;

    const matches = regex.exec(trimmed);

    if (matches?.length === 3) {
      return matches[2];
    }
    return fallback;
  }

  try {
    const firstDefinition = doc.definitions[0];

    if (!firstDefinition) {
      return fallback;
    }

    const operationName = firstDefinition.kind === Kind.OPERATION_DEFINITION 
      ? firstDefinition?.name?.value 
      : fallback;

    if (typeof operationName === 'string') {
      return operationName;
    }
  } catch {}

  return fallback;
}
