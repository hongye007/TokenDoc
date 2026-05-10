/// <reference path="../brand-globals.d.ts" />

const H = __TD_GATEWAY_V1__;

type MediaAsideLang = "curl" | "python" | "javascript" | "go" | "php";

type Bundle = Record<MediaAsideLang, string>;

export const CREATE_IMAGE_RESPONSE = `{
  "created": 1706000000,
  "data": [
    {
      "url": "https://...",
      "revised_prompt": "A fluffy white cat with bright eyes..."
    }
  ]
}`;

export const createImageSnippets: Bundle = {
  curl: `curl -X POST "${H}/images/generations" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gemini-3-pro-image-preview",
    "prompt": "A cinematic portrait of a white cat sitting on a rainy windowsill",
    "aspect_ratio": "16:9",
    "resolution": "2k",
    "n": 1
  }'`,
  python: `from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${H}",
)

response = client.images.generate(
    model="gemini-3-pro-image-preview",
    prompt="A cinematic portrait of a white cat sitting on a rainy windowsill",
    aspect_ratio="16:9",
    resolution="2k",
    n=1,
)

print(response.data[0].url)`,
  javascript: `import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: '${H}'
});

const response = await client.images.generate({
  model: 'gemini-3-pro-image-preview',
  prompt: 'A cinematic portrait of a white cat sitting on a rainy windowsill',
  aspect_ratio: '16:9',
  resolution: '2k',
  n: 1
});

console.log(response.data[0].url);`,
  go: `package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
)

func main() {
    body, _ := json.Marshal(map[string]interface{}{
        "model": "gemini-3-pro-image-preview",
        "prompt": "A cinematic portrait of a white cat sitting on a rainy windowsill",
        "aspect_ratio": "16:9",
        "resolution": "2k",
        "n": 1,
    })
    req, _ := http.NewRequest("POST", "${H}/images/generations", bytes.NewBuffer(body))
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,
  php: `<?php
$ch = curl_init('${H}/images/generations');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Authorization: Bearer sk-your-api-key'
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'model' => 'gemini-3-pro-image-preview',
        'prompt' => 'A cinematic portrait of a white cat sitting on a rainy windowsill',
        'aspect_ratio' => '16:9',
        'resolution' => '2k',
        'n' => 1
    ])
]);
$response = curl_exec($ch);
curl_close($ch);
$data = json_decode($response, true);
echo $data['data'][0]['url'];
`,
};

export const EDIT_IMAGE_RESPONSE = `{
  "created": 1706000000,
  "data": [
    {
      "url": "https://..."
    }
  ]
}`;

export const editImageSnippets: Bundle = {
  curl: `curl -X POST "${H}/images/edits" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -F "image=@sunlit_lounge.png" \\
  -F "mask=@mask.png" \\
  -F "prompt=阳光明媚的室内休息区，带有游泳池" \\
  -F "n=1" \\
  -F "size=1024x1024"`,
  python: `from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${H}",
)

response = client.images.edit(
    model="dall-e-2",
    image=open("sunlit_lounge.png", "rb"),
    mask=open("mask.png", "rb"),
    prompt="阳光明媚的室内休息区，带有游泳池",
    n=1,
    size="1024x1024",
)

print(response.data[0].url)`,
  javascript: `import OpenAI from 'openai';
import fs from 'fs';

const client = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: '${H}'
});

const response = await client.images.edit({
  model: 'dall-e-2',
  image: fs.createReadStream('sunlit_lounge.png'),
  mask: fs.createReadStream('mask.png'),
  prompt: '阳光明媚的室内休息区，带有游泳池',
  n: 1,
  size: '1024x1024'
});

console.log(response.data[0].url);`,
  go: `// multipart 编辑建议用 curl / SDK；以下为 JSON + image_url 示意（依网关是否支持）
package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
)

func main() {
    payload := map[string]interface{}{
        "model":     "dall-e-2",
        "prompt":    "阳光明媚的室内休息区，带有游泳池",
        "image_url": "https://example.com/sunlit_lounge.png",
        "n":         1,
        "size":      "1024x1024",
    }
    body, _ := json.Marshal(payload)
    req, _ := http.NewRequest("POST", "${H}/images/edits", bytes.NewBuffer(body))
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,
  php: `<?php
// 若网关支持 multipart，可用 CURLFile 上传 image/mask
$ch = curl_init('${H}/images/edits');
$post = [
    'model' => 'dall-e-2',
    'image' => new CURLFile('sunlit_lounge.png'),
    'mask' => new CURLFile('mask.png'),
    'prompt' => '阳光明媚的室内休息区，带有游泳池',
    'n' => 1,
    'size' => '1024x1024',
];
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => ['Authorization: Bearer sk-your-api-key'],
    CURLOPT_POSTFIELDS => $post,
]);
$response = curl_exec($ch);
curl_close($ch);
$data = json_decode($response, true);
echo $data['data'][0]['url'];
`,
};

export const VARIATION_RESPONSE = `{
  "created": 1706000000,
  "data": [
    { "url": "https://..." },
    { "url": "https://..." }
  ]
}`;

export const variationSnippets: Bundle = {
  curl: `curl -X POST "${H}/images/variations" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -F "image=@cat.png" \\
  -F "n=2" \\
  -F "size=1024x1024"`,
  python: `from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${H}",
)

response = client.images.create_variation(
    model="dall-e-2",
    image=open("cat.png", "rb"),
    n=2,
    size="1024x1024",
)

for image in response.data:
    print(image.url)`,
  javascript: `import OpenAI from 'openai';
import fs from 'fs';

const client = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: '${H}'
});

const response = await client.images.createVariation({
  model: 'dall-e-2',
  image: fs.createReadStream('cat.png'),
  n: 2,
  size: '1024x1024'
});

response.data.forEach(image => console.log(image.url));`,
  go: `package main

import (
    "bytes"
    "fmt"
    "io"
    "mime/multipart"
    "net/http"
    "os"
)

func main() {
    var b bytes.Buffer
    w := multipart.NewWriter(&b)
    _ = w.WriteField("n", "2")
    _ = w.WriteField("size", "1024x1024")
    f, _ := os.Open("cat.png")
    part, _ := w.CreateFormFile("image", "cat.png")
    io.Copy(part, f)
    f.Close()
    w.Close()
    req, _ := http.NewRequest("POST", "${H}/images/variations", &b)
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", w.FormDataContentType())
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,
  php: `<?php
$ch = curl_init('${H}/images/variations');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => ['Authorization: Bearer sk-your-api-key'],
    CURLOPT_POSTFIELDS => [
        'image' => new CURLFile('cat.png'),
        'n' => 2,
        'size' => '1024x1024',
    ],
]);
$response = curl_exec($ch);
curl_close($ch);
$data = json_decode($response, true);
foreach ($data['data'] as $img) echo $img['url'] . "\\n";
`,
};

export const SPEECH_RESPONSE = `/* 二进制音频文件，例如 MP3 */`;

export const speechSnippets: Bundle = {
  curl: `curl -X POST "${H}/audio/speech" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "tts-1-hd",
    "voice": "nova",
    "input": "Hello, welcome to our API!"
  }' \\
  --output speech.mp3`,
  python: `from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${H}",
)

response = client.audio.speech.create(
    model="tts-1-hd",
    voice="nova",
    input="Hello, welcome to our API!",
)

response.stream_to_file("speech.mp3")`,
  javascript: `import OpenAI from 'openai';
import fs from 'fs';

const client = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: '${H}'
});

const response = await client.audio.speech.create({
  model: 'tts-1-hd',
  voice: 'nova',
  input: 'Hello, welcome to our API!'
});

const buffer = Buffer.from(await response.arrayBuffer());
fs.writeFileSync('speech.mp3', buffer);`,
  go: `package main

import (
    "bytes"
    "encoding/json"
    "io"
    "net/http"
    "os"
)

func main() {
    body, _ := json.Marshal(map[string]interface{}{
        "model": "tts-1-hd", "voice": "nova", "input": "Hello, welcome to our API!",
    })
    req, _ := http.NewRequest("POST", "${H}/audio/speech", bytes.NewBuffer(body))
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    f, _ := os.Create("speech.mp3")
    defer f.Close()
    io.Copy(f, resp.Body)
}`,
  php: `<?php
$ch = curl_init('${H}/audio/speech');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Authorization: Bearer sk-your-api-key'
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'model' => 'tts-1-hd',
        'voice' => 'nova',
        'input' => 'Hello, welcome to our API!'
    ])
]);
$audio = curl_exec($ch);
curl_close($ch);
file_put_contents('speech.mp3', $audio);
`,
};

export const TRANSCRIPTION_RESPONSE = `{
  "text": "Hello, this is a test of the transcription API."
}`;

export const transcriptionSnippets: Bundle = {
  curl: `curl -X POST "${H}/audio/transcriptions" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -F file="@audio.mp3" \\
  -F model="whisper-1" \\
  -F language="en"`,
  python: `from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${H}",
)

with open("audio.mp3", "rb") as audio_file:
    response = client.audio.transcriptions.create(
        model="whisper-1",
        file=audio_file,
        language="en",
    )

print(response.text)`,
  javascript: `import OpenAI from 'openai';
import fs from 'fs';

const client = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: '${H}'
});

const response = await client.audio.transcriptions.create({
  model: 'whisper-1',
  file: fs.createReadStream('audio.mp3'),
  language: 'en'
});

console.log(response.text);`,
  go: `package main

import (
    "bytes"
    "fmt"
    "io"
    "mime/multipart"
    "net/http"
    "os"
)

func main() {
    var b bytes.Buffer
    w := multipart.NewWriter(&b)
    _ = w.WriteField("model", "whisper-1")
    _ = w.WriteField("language", "en")
    f, _ := os.Open("audio.mp3")
    part, _ := w.CreateFormFile("file", "audio.mp3")
    io.Copy(part, f)
    f.Close()
    w.Close()
    req, _ := http.NewRequest("POST", "${H}/audio/transcriptions", &b)
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", w.FormDataContentType())
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,
  php: `<?php
$ch = curl_init('${H}/audio/transcriptions');
$file = new CURLFile('audio.mp3', 'audio/mpeg', 'audio.mp3');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => ['Authorization: Bearer sk-your-api-key'],
    CURLOPT_POSTFIELDS => ['file' => $file, 'model' => 'whisper-1', 'language' => 'en'],
]);
$response = curl_exec($ch);
curl_close($ch);
$data = json_decode($response, true);
echo $data['text'];
`,
};

export const TRANSLATION_RESPONSE = `{
  "text": "Hello, my name is Wolfgang and I come from Germany. Where are you from?"
}`;

export const translationSnippets: Bundle = {
  curl: `curl -X POST "${H}/audio/translations" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -F "file=@german_audio.mp3" \\
  -F "model=whisper-1"`,
  python: `from openai import OpenAI

client = OpenAI(
    api_key="sk-your-api-key",
    base_url="${H}",
)

with open("german_audio.mp3", "rb") as audio_file:
    response = client.audio.translations.create(
        model="whisper-1",
        file=audio_file,
    )

print(response.text)`,
  javascript: `import OpenAI from 'openai';
import fs from 'fs';

const client = new OpenAI({
  apiKey: 'sk-your-api-key',
  baseURL: '${H}'
});

const response = await client.audio.translations.create({
  model: 'whisper-1',
  file: fs.createReadStream('german_audio.mp3')
});

console.log(response.text);`,
  go: `package main

import (
    "bytes"
    "fmt"
    "io"
    "mime/multipart"
    "net/http"
    "os"
)

func main() {
    var b bytes.Buffer
    w := multipart.NewWriter(&b)
    _ = w.WriteField("model", "whisper-1")
    f, _ := os.Open("german_audio.mp3")
    part, _ := w.CreateFormFile("file", "german_audio.mp3")
    io.Copy(part, f)
    f.Close()
    w.Close()
    req, _ := http.NewRequest("POST", "${H}/audio/translations", &b)
    req.Header.Set("Authorization", "Bearer sk-your-api-key")
    req.Header.Set("Content-Type", w.FormDataContentType())
    resp, _ := http.DefaultClient.Do(req)
    defer resp.Body.Close()
    out, _ := io.ReadAll(resp.Body)
    fmt.Println(string(out))
}`,
  php: `<?php
$ch = curl_init('${H}/audio/translations');
$file = new CURLFile('german_audio.mp3', 'audio/mpeg', 'german_audio.mp3');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => ['Authorization: Bearer sk-your-api-key'],
    CURLOPT_POSTFIELDS => ['file' => $file, 'model' => 'whisper-1'],
]);
$response = curl_exec($ch);
curl_close($ch);
$data = json_decode($response, true);
echo $data['text'];
`,
};
