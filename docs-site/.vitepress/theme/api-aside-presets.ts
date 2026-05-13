/** 右侧「请求 / 响应」面板预设；网关 Base 与当前 `DOC_BRAND` 构建一致。 */

/// <reference path="../brand-globals.d.ts" />

import {
  CREATE_IMAGE_RESPONSE,
  EDIT_IMAGE_RESPONSE,
  SPEECH_RESPONSE,
  TRANSCRIPTION_RESPONSE,
  TRANSLATION_RESPONSE,
  VARIATION_RESPONSE,
  createImageSnippets,
  editImageSnippets,
  speechSnippets,
  transcriptionSnippets,
  translationSnippets,
  variationSnippets,
} from "./api-aside-media-presets";

export const LIST_MODELS_RESPONSE = `{
  "object": "list",
  "data": [
    {
      "id": "gpt-5.4",
      "object": "model",
      "created": 1706000000,
      "owned_by": "openai"
    },
    {
      "id": "claude-sonnet-4-6",
      "object": "model",
      "created": 1706000000,
      "owned_by": "anthropic"
    },
    {
      "id": "gemini-2.5-flash",
      "object": "model",
      "created": 1706000000,
      "owned_by": "google"
    }
  ]
}`;

const BASE = __TD_GATEWAY_V1__;

export const listModelsSnippets = {
  curl: `curl "${BASE}/models" \\
  -H "Authorization: Bearer sk-your-api-key"`,

  python: `from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${BASE}",
)

models = client.models.list()

for model in models.data:
    print(f"{model.id} ({model.owned_by})")`,

  javascript: `import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: '${BASE}'
});

const models = await client.models.list();

for (const model of models.data) {
  console.log(\`\${model.id} (\${model.owned_by})\`);
}`,

  go: `package main

import (
    "encoding/json"
    "fmt"
    "net/http"
)

func main() {
    req, _ := http.NewRequest("GET", "${BASE}/models", nil)
    req.Header.Set("Authorization", "Bearer sk-your-api-key")

    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()

    var payload struct {
        Data []struct {
            ID      string \`json:"id"\`
            OwnedBy string \`json:"owned_by"\`
        } \`json:"data"\`
    }

    json.NewDecoder(resp.Body).Decode(&payload)

    for _, model := range payload.Data {
        fmt.Printf("%s (%s)\\n", model.ID, model.OwnedBy)
    }
}`,

  php: `<?php
$ch = curl_init('${BASE}/models');

curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer sk-your-api-key'
    ]
]);

$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);
foreach ($data['data'] as $model) {
    echo "{$model['id']} ({$model['owned_by']})\\n";
}
`,
} as const;

export type AsideLang = keyof typeof listModelsSnippets;

export type AsidePreset = { snippets: Record<AsideLang, string>; response: string };

const HOST_V1 = BASE;

/** Anthropic SDK：网关根与 OpenAI 兼容层同域（`api.*`）。 */
const ANTHROPIC_ORIGIN = __TD_API_GATEWAY_ORIGIN__;

export const GET_MODEL_RESPONSE = `{
  "id": "gpt-5.4",
  "object": "model",
  "created": 1706000000,
  "owned_by": "openai"
}`;

export const getModelSnippets: Record<AsideLang, string> = {
  curl: `curl "${HOST_V1}/models/gpt-5.4" \\
  -H "Authorization: Bearer sk-your-api-key"`,
  python: `from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${HOST_V1}"
)

model = client.models.retrieve("gpt-5.4")
print(f"Model: {model.id}, Provider: {model.owned_by}")`,
  javascript: `import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: '${HOST_V1}'
});

const model = await client.models.retrieve('gpt-5.4');
console.log(\`Model: \${model.id}, Provider: \${model.owned_by}\`);`,
  go: `package main

import (
    "encoding/json"
    "fmt"
    "net/http"
)

func main() {
    req, _ := http.NewRequest("GET", "${HOST_V1}/models/gpt-5.4", nil)
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    var model map[string]interface{}
    json.NewDecoder(resp.Body).Decode(&model)
    fmt.Printf("Model: %v, Provider: %v\\n", model["id"], model["owned_by"])
}`,
  php: `<?php
$ch = curl_init('${HOST_V1}/models/gpt-5.4');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => ['Authorization: Bearer sk-your-api-key']
]);
$response = curl_exec($ch);
curl_close($ch);
$model = json_decode($response, true);
echo "Model: {$model['id']}, Provider: {$model['owned_by']}\\n";
`,
};

export const CHAT_COMPLETION_RESPONSE = `{
  "id": "chatcmpl-abc123",
  "object": "chat.completion",
  "created": 1706000000,
  "model": "gpt-4o",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Hello! How can I help you today?"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 20,
    "completion_tokens": 9,
    "total_tokens": 29
  }
}`;

export const chatCompletionSnippets: Record<AsideLang, string> = {
  curl: `curl -X POST "${HOST_V1}/chat/completions" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Hello!"}
    ],
    "temperature": 0.7,
    "max_tokens": 1000
  }'`,
  python: `from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${HOST_V1}"
)

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello!"}
    ],
    temperature=0.7,
    max_tokens=1000
)

print(response.choices[0].message.content)`,
  javascript: `import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: '${HOST_V1}'
});

const response = await client.chat.completions.create({
  model: 'gpt-4o',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Hello!' }
  ],
  temperature: 0.7,
  max_tokens: 1000
});

console.log(response.choices[0].message.content);`,
  go: `package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
)

func main() {
    payload := map[string]interface{}{
        "model": "gpt-4o",
        "messages": []map[string]string{
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Hello!"},
        },
        "temperature": 0.7,
        "max_tokens": 1000,
    }
    body, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "${HOST_V1}/chat/completions", bytes.NewBuffer(body))
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    b, _ := io.ReadAll(resp.Body)
    fmt.Println(string(b))
}`,
  php: `<?php
$ch = curl_init('${HOST_V1}/chat/completions');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Authorization: Bearer sk-your-api-key'
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'model' => 'gpt-4o',
        'messages' => [
            ['role' => 'system', 'content' => 'You are a helpful assistant.'],
            ['role' => 'user', 'content' => 'Hello!']
        ],
        'temperature' => 0.7,
        'max_tokens' => 1000
    ])
]);
$response = curl_exec($ch);
curl_close($ch);
$data = json_decode($response, true);
echo $data['choices'][0]['message']['content'];
`,
};

export const CREATE_RESPONSE_JSON = `{
  "id": "resp_abc123",
  "object": "response",
  "created": 1706000000,
  "model": "gpt-4o",
  "output": [
    {
      "type": "message",
      "role": "assistant",
      "content": [
        {"type": "text", "text": "Hello! How can I help you today?"}
      ]
    }
  ],
  "usage": {
    "input_tokens": 10,
    "output_tokens": 12,
    "total_tokens": 22
  }
}`;

export const createResponseSnippets: Record<AsideLang, string> = {
  curl: `curl -X POST "${HOST_V1}/responses" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4o",
    "input": [
      {"type": "message", "role": "user", "content": "Hello!"}
    ],
    "max_output_tokens": 1000
  }'`,
  python: `from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${HOST_V1}"
)

response = client.responses.create(
    model="gpt-4o",
    input=[
        {"type": "message", "role": "user", "content": "Hello!"}
    ],
    max_output_tokens=1000
)

print(response.output)`,
  javascript: `import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: '${HOST_V1}'
});

const response = await client.responses.create({
  model: 'gpt-4o',
  input: [
    { type: 'message', role: 'user', content: 'Hello!' }
  ],
  max_output_tokens: 1000
});

console.log(response.output);`,
  go: `package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
)

func main() {
    payload := map[string]interface{}{
        "model": "gpt-4o",
        "input": []map[string]interface{}{
            {"type": "message", "role": "user", "content": "Hello!"},
        },
        "max_output_tokens": 1000,
    }
    body, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "${HOST_V1}/responses", bytes.NewBuffer(body))
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,
  php: `<?php
$ch = curl_init('${HOST_V1}/responses');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Authorization: Bearer sk-your-api-key'
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'model' => 'gpt-4o',
        'input' => [
            ['type' => 'message', 'role' => 'user', 'content' => 'Hello!']
        ],
        'max_output_tokens' => 1000
    ])
]);
$response = curl_exec($ch);
curl_close($ch);
$data = json_decode($response, true);
print_r($data['output']);
`,
};

export const CREATE_MESSAGE_RESPONSE = `{
  "id": "msg_abc123",
  "type": "message",
  "role": "assistant",
  "content": [
    {
      "type": "text",
      "text": "Hello! How can I help you today?"
    }
  ],
  "model": "claude-sonnet-4-6",
  "stop_reason": "end_turn",
  "usage": {
    "input_tokens": 15,
    "output_tokens": 10
  }
}`;

export const createMessageSnippets: Record<AsideLang, string> = {
  curl: `curl -X POST "${ANTHROPIC_ORIGIN}/v1/messages" \\
  -H "x-api-key: sk-your-api-key" \\
  -H "anthropic-version: 2023-06-01" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "claude-sonnet-4-6",
    "max_tokens": 1024,
    "system": "You are a helpful assistant.",
    "messages": [
      {"role": "user", "content": "Hello, Claude!"}
    ]
  }'`,
  python: `from anthropic import Anthropic

client = Anthropic(
    api_key="sk-your-api-key",
    base_url="${ANTHROPIC_ORIGIN}"
)

message = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    system="You are a helpful assistant.",
    messages=[
        {"role": "user", "content": "Hello, Claude!"}
    ]
)

print(message.content[0].text)`,
  javascript: `import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: 'sk-your-api-key',
  baseURL: '${ANTHROPIC_ORIGIN}'
});

const message = await client.messages.create({
  model: 'claude-sonnet-4-6',
  max_tokens: 1024,
  system: 'You are a helpful assistant.',
  messages: [
    { role: 'user', content: 'Hello, Claude!' }
  ]
});

console.log(message.content[0].text);`,
  go: `package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
)

func main() {
    payload := map[string]interface{}{
        "model":      "claude-sonnet-4-6",
        "max_tokens": 1024,
        "system":     "You are a helpful assistant.",
        "messages": []map[string]string{
            {"role": "user", "content": "Hello, Claude!"},
        },
    }
    jsonData, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "${ANTHROPIC_ORIGIN}/v1/messages", bytes.NewBuffer(jsonData))
    req.Header.Set("x-api-key", "sk-your-api-key")
    req.Header.Set("anthropic-version", "2023-06-01")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    body, _ := io.ReadAll(resp.Body)
    fmt.Println(string(body))
}`,
  php: `<?php
$payload = [
    'model' => 'claude-sonnet-4-6',
    'max_tokens' => 1024,
    'system' => 'You are a helpful assistant.',
    'messages' => [
        ['role' => 'user', 'content' => 'Hello, Claude!']
    ]
];
$ch = curl_init('${ANTHROPIC_ORIGIN}/v1/messages');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'x-api-key: sk-your-api-key',
        'anthropic-version: 2023-06-01',
        'Content-Type: application/json'
    ],
    CURLOPT_POSTFIELDS => json_encode($payload)
]);
$response = curl_exec($ch);
curl_close($ch);
$data = json_decode($response, true);
echo $data['content'][0]['text'];
`,
};

export const EMBEDDING_RESPONSE = `{
  "object": "list",
  "data": [
    {
      "object": "embedding",
      "index": 0,
      "embedding": [0.0023, -0.0194, 0.0081]
    }
  ],
  "model": "text-embedding-3-small",
  "usage": {
    "prompt_tokens": 9,
    "total_tokens": 9
  }
}`;

export const embeddingSnippets: Record<AsideLang, string> = {
  curl: `curl -X POST "${HOST_V1}/embeddings" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "text-embedding-3-small",
    "input": "The quick brown fox jumps over the lazy dog"
  }'`,
  python: `from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${HOST_V1}"
)

response = client.embeddings.create(
    model="text-embedding-3-small",
    input="The quick brown fox jumps over the lazy dog"
)

embedding = response.data[0].embedding
print(f"Embedding dimension: {len(embedding)}")
print(f"First 5 values: {embedding[:5]}")`,
  javascript: `import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: '${HOST_V1}'
});

const response = await client.embeddings.create({
  model: 'text-embedding-3-small',
  input: 'The quick brown fox jumps over the lazy dog'
});

console.log(response.data[0].embedding.slice(0, 5));`,
  go: `package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
)

func main() {
    payload := map[string]interface{}{
        "model": "text-embedding-3-small",
        "input": "The quick brown fox jumps over the lazy dog",
    }
    body, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "${HOST_V1}/embeddings", bytes.NewBuffer(body))
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,
  php: `<?php
$ch = curl_init('${HOST_V1}/embeddings');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Authorization: Bearer sk-your-api-key'
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'model' => 'text-embedding-3-small',
        'input' => 'The quick brown fox jumps over the lazy dog'
    ])
]);
$response = curl_exec($ch);
curl_close($ch);
$data = json_decode($response, true);
print_r(array_slice($data['data'][0]['embedding'], 0, 5));
`,
};

export const RERANK_RESPONSE = `{
  "results": [
    {
      "index": 0,
      "relevance_score": 0.95,
      "document": "Machine learning is a subset of AI"
    },
    {
      "index": 2,
      "relevance_score": 0.82,
      "document": "Deep learning uses neural networks"
    }
  ],
  "model": "BAAI/bge-reranker-v2-m3",
  "usage": {
    "prompt_tokens": 45,
    "total_tokens": 45
  }
}`;

export const rerankSnippets: Record<AsideLang, string> = {
  curl: `curl -X POST "${HOST_V1}/rerank" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "BAAI/bge-reranker-v2-m3",
    "query": "What is machine learning?",
    "documents": [
      "Machine learning is a subset of AI",
      "The weather is nice today",
      "Deep learning uses neural networks"
    ],
    "top_n": 2,
    "return_documents": true
  }'`,
  python: `import requests

response = requests.post(
    "${HOST_V1}/rerank",
    headers={"Authorization": "Bearer sk-your-api-key"},
    json={
        "model": "BAAI/bge-reranker-v2-m3",
        "query": "What is machine learning?",
        "documents": [
            "Machine learning is a subset of AI",
            "The weather is nice today",
            "Deep learning uses neural networks"
        ],
        "top_n": 2
    }
)

print(response.json())`,
  javascript: `const response = await fetch('${HOST_V1}/rerank', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer sk-your-api-key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'BAAI/bge-reranker-v2-m3',
    query: 'What is machine learning?',
    documents: [
      'Machine learning is a subset of AI',
      'The weather is nice today',
      'Deep learning uses neural networks'
    ],
    top_n: 2
  })
});

const data = await response.json();
console.log(data.results);`,
  go: `package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
)

func main() {
    payload := map[string]interface{}{
        "model": "BAAI/bge-reranker-v2-m3",
        "query": "What is machine learning?",
        "documents": []string{
            "Machine learning is a subset of AI",
            "The weather is nice today",
            "Deep learning uses neural networks",
        },
        "top_n": 2,
    }
    body, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "${HOST_V1}/rerank", bytes.NewBuffer(body))
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,
  php: `<?php
$ch = curl_init('${HOST_V1}/rerank');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Authorization: Bearer sk-your-api-key'
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'model' => 'BAAI/bge-reranker-v2-m3',
        'query' => 'What is machine learning?',
        'documents' => [
            'Machine learning is a subset of AI',
            'The weather is nice today',
            'Deep learning uses neural networks'
        ],
        'top_n' => 2
    ])
]);
$response = curl_exec($ch);
curl_close($ch);
$data = json_decode($response, true);
print_r($data['results']);
`,
};

export function normAsideRoute(p: string): string {
  return p.replace(/\.html$/, "").replace(/\/$/, "") || "/";
}

/** 与文档路由对应的右侧栏「请求 / 响应」预设（网关与 `DOC_BRAND` 一致）。 */
export function resolveAsidePreset(path: string): AsidePreset | null {
  const n = normAsideRoute(path);
  if (n === "/api/ai-model/models" || n.endsWith("/api/ai-model/models/list/listmodels")) {
    return { snippets: { ...listModelsSnippets }, response: LIST_MODELS_RESPONSE };
  }
  if (n.endsWith("/api/ai-model/models/get-model")) {
    return { snippets: getModelSnippets, response: GET_MODEL_RESPONSE };
  }
  if (n.endsWith("/api/ai-model/chat/openai/createchatcompletion")) {
    return { snippets: chatCompletionSnippets, response: CHAT_COMPLETION_RESPONSE };
  }
  if (n.endsWith("/api/ai-model/chat/openai/createresponse")) {
    return { snippets: createResponseSnippets, response: CREATE_RESPONSE_JSON };
  }
  if (n.endsWith("/api/ai-model/chat/createmessage")) {
    return { snippets: createMessageSnippets, response: CREATE_MESSAGE_RESPONSE };
  }
  if (n.endsWith("/api/ai-model/embeddings/createembedding")) {
    return { snippets: embeddingSnippets, response: EMBEDDING_RESPONSE };
  }
  if (n.endsWith("/api/ai-model/rerank/creatererank")) {
    return { snippets: rerankSnippets, response: RERANK_RESPONSE };
  }
  if (n.endsWith("/api/ai-model/images/create-image")) {
    return { snippets: createImageSnippets as Record<AsideLang, string>, response: CREATE_IMAGE_RESPONSE };
  }
  if (n.endsWith("/api/ai-model/images/edit-image")) {
    return { snippets: editImageSnippets as Record<AsideLang, string>, response: EDIT_IMAGE_RESPONSE };
  }
  if (n.endsWith("/api/ai-model/images/create-variation")) {
    return { snippets: variationSnippets as Record<AsideLang, string>, response: VARIATION_RESPONSE };
  }
  if (n.endsWith("/api/ai-model/audio/create-speech")) {
    return { snippets: speechSnippets as Record<AsideLang, string>, response: SPEECH_RESPONSE };
  }
  if (n.endsWith("/api/ai-model/audio/create-transcription")) {
    return { snippets: transcriptionSnippets as Record<AsideLang, string>, response: TRANSCRIPTION_RESPONSE };
  }
  if (n.endsWith("/api/ai-model/audio/create-translation")) {
    return { snippets: translationSnippets as Record<AsideLang, string>, response: TRANSLATION_RESPONSE };
  }
  return null;
}
