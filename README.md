# Shimmer

<img src="./assets/vue-shimmer.gif" />

A placeholder shimmer for vuejs, unlike other placeholder modules Shimmer inherits basic styles from computed styles.  Take the following example.

```html
<p class="red-text" v-if="loading">
  <textShimmer />
</p>
<p class="red-text" v-else>
  Tortor Etiam Vestibulum Inceptos Ornare
</p>
```

Assuming the class red-text has the property `color: red`, textShimmer will render with a red background to match the text color.  This feature of inheritance also applies to font-size, to roughly mimic the height of that font.

## Installation

```
npm install vue-shimmer babel-loader css-loader vue-style-loader vue-template-compiler
```

## Usage

```js
import {
  blockShimmer,
  circleShimmer,
  imageShimmer,
  paragraphsShimmer,
  sentencesShimmer,
  textShimmer
} from 'shimmer'

// ...

components: {
  'blockShimmer': blockShimmer,
  'circleShimmer': circleShimmer,
  'imageShimmer': imageShimmer,
  'paragraphsShimmer': paragraphsShimmer.
  'sentencesShimmer': sentencesShimmer,
  'textShimmer': textShimmer
},
```

```html
<div class="col-1">
  <circleShimmer size="40px" />
</div>
<div class="col-2">
  <h1>
    <textShimmer />
  </h1>
  <small>
    <textShimmer />
  </small>
  <p>
    <sentencesShimmer lines="6" />
  </p>
</div>
```

## Components

### Block

Provides a basic block placeholder to the dimensions specified.

```html
<blockShimmer height="50px" width="60px" />
```

#### Props

##### `height`

- Type: String
- _Required_

##### `width`

- Type: String
- _Required_

### Circle

Provides a circle placeholder to the size specified by the property or inheriting the fontsize, making this ideal for avatar and icon placeholders.

```html
<circleShimmer size="30px" />

<!-- or -->

<div style="font-size:20px">
  <circleShimmer />
</div>
```

#### Props

##### `size`

- Type: String

### Image

Provides a image block placeholder similar to [blockShimmer](#block).  However `imageShimmer` maintains an aspect ratio at various window sizes.

```html
<imageShimmer height="50" width="60" />
```

#### Props

##### `height`

Specifies the height of the image placeholder.

- Type: String
- _Required_

##### `width`

Specifies the width of the image placeholder.

- Type: String
- _Required_

### Text

Provides a text placeholder to mimic text.

```html
<textShimmer width="60%" />

<!-- or -->

<h1>
  <textShimmer />
</h1>
```

#### Props

##### `width`

- Type: String
- Default: `45%`

### Sentences

Provides a sentences placeholder to mimic lines in a paragraph.

```html
<p>
  <sentencesShimmer lines=5 />
</p>
```

#### Props

##### `lines`

- Type: Number
- Default: `4`

### Paragraphs

Provides a paragraghs placeholder to mimic paragraghs.

```html
<paragraghsShimmer total=5 />
```

#### Props

##### `total`

- Type: Number
- Default: `4`

## Styling

Although styling is mainly inherited from computed styles. There are some styles that can be re-defined.

Below are a few examples of how they can be applied and variables available.

**CSS example (Recommended)**

```css
.root {
  --shimmer-color: red;
}
```

**Inline example**

```html
<textShimmer style="--shimmer-color: red"></textShimmer>
```

### `--shimmer-color`

Defines the color of placeholders.

- Default: currentColor

### `--shimmer-shine-color`

Defines the color of the shine effect on placeholders.

- Default: rgba(255, 255, 255, 0.8)

### `--shimmer-duration`

Defines the animation duration of placeholders.

- Default: 1.5s

### `--shimmer-timing-function`

Defines the animation timing function of placeholders.

- Default: linear

### `--shimmer-radius`

Defines default border radius of placeholders.

- Default: none
