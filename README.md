# Time tracking dashboard

A dashboard component that track various activities and the time spent for each one, built with Next.js.

![](/public/screenshot/screen.png)

## Table of Contents

- [Overview](#overview)
- [The Challenge](#the-challenge)
- [Built with](#built-with)
- [Useful Resources](#useful-resources)

## Overview

Given a style guide, the purpose of this project is to build a dashboard and replicate the design to as close as possible to the given style guide.

Data is provided via a `.json` file and fetched by importing the json file directly as a utility file (`fetchData.ts`).

```ts
import dataObject from '../data/data.json';

export default function fetchData(title: string) {
  // Filter for the correct time report
  const result = dataObject.filter((data) => data.title === title);

  // Return the time for daily, weekly, and monthly
  const { daily, weekly, monthly } = result[0].timeframes;
  return { daily, weekly, monthly };
}
```

## The Challenge

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

## Built with

- Next.js (Typescript)
- CSS Modules

## Useful Resources

- [Next Image Component API](https://nextjs.org/docs/app/api-reference/components/image)
