config.js增加

```javascript
clientConfigFile: path.resolve(__dirname, './client.js')
```

主页README.md内容：

```markdown
---
home: true
---

<ClientOnly>
  <Home />
</ClientOnly>
```