Project Overview: Next.js homepage with:

BlurText → animated text with blur/letter or word animation

MagnetLines → interactive grid of lines that move toward the cursor

Gemini 2.0 UI → input box to query Gemini API

Canvas Layout:

+------------------------------------------------------+
|                      HomePage                        |
|------------------------------------------------------|
|  [BlurText]                                          |
|  Animated & blurred text, appears on hover/animate  |
|                                                      |
|  [MagnetLines]                                      |
|  Grid of lines reacting to cursor movement          |
|                                                      |
|  [Gemini UI]                                        |
|  Input box + "Ask Gemini" button + loading state   |
|  API call to Gemini 2.0 Flash                        |
+------------------------------------------------------+


Component Flow Diagram:

   User Input
       |
       v
   [Gemini UI Component]
       |
       v
  POST /api/gemini ---> Gemini 2.0 API
       |
       v
   Response Displayed
       |
       v
     Updated UI


Interactions:

BlurText: Animates letters or words from blur → clear. Supports delay & direction.

MagnetLines: Lines follow cursor with a subtle “magnet” effect. Configurable rows/columns, size, color.

Gemini UI: Server-side API call, shows loading, displays response.