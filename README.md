# mofron-event-visiclick
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

visible switch click event for mofron


# Install
```
npm install mofron mofron-event-visiclick
```

# Sample
```html
<setting>
    <tag load="mofron-comp-text">Text</tag>
    <tag load="mofron-comp-button">Button</tag>
    <tag load="mofron-event-visiclick">vsClick</tag>
</setting>

<Text name=tes>Test</Text>
<Button event=vsClick:("switch",@tes)>switch</Button>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | tgtComp | mixed | Component: set visible target component |
| | | | undefined: call as getter |
| | callback | function | callback function |
| | | | undefined: call as getter |
| | mode | string | visible mode ('enable', 'disable', 'switch') |
| | | | undefined: call as getter |

