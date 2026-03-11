# React Component Patterns

## Functional Component Template

```tsx
interface Props {
  title: string;
  children: React.ReactNode;
  variant?: "default" | "highlighted";
}

const Card = ({ title, children, variant = "default" }: Props) => (
  <article className={`card card--${variant}`}>
    <h3 className="card-title">{title}</h3>
    <div className="card-content">{children}</div>
  </article>
);
```

## Composition Over Configuration

Prefer composable children over complex prop APIs:

```tsx
// Good: composable
<Card>
  <CardHeader>Title</CardHeader>
  <CardBody>Content</CardBody>
</Card>

// Avoid: config-driven
<Card title="Title" body="Content" headerIcon={...} footerAction={...} />
```

## Conditional Rendering

```tsx
// Boolean toggle
{isExpanded && <Details />}

// Ternary for either/or
{isLoading ? <Spinner /> : <Content />}

// Null for nothing
{hasError ? <Error /> : null}
```

## List Rendering

```tsx
// Use stable, meaningful keys (not array index when list can reorder)
{items.map((item) => (
  <ListItem key={item.id} item={item} />
))}
```

## Rendering Markdown Safely

When using `dangerouslySetInnerHTML` with parsed markdown:

```tsx
import { marked } from "marked";

// Render markdown content
const description = marked.parse(item.description) as string;
return <div dangerouslySetInnerHTML={{ __html: description }} />;
```

**Safety note**: Only use `dangerouslySetInnerHTML` with trusted content (your own data files). Never use it with user-submitted or external content without sanitization (DOMPurify).

## Responsive Image Component

```tsx
interface ResponsiveImageProps {
  src: string;
  srcSet?: string;
  alt: string;
  width: number;
  height: number;
  loading?: "lazy" | "eager";
}

const ResponsiveImage = ({
  src, srcSet, alt, width, height, loading = "lazy"
}: ResponsiveImageProps) => (
  <img
    src={src}
    srcSet={srcSet}
    alt={alt}
    width={width}
    height={height}
    loading={loading}
  />
);
```

## State Management Patterns

For simple UI state:
```tsx
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen((prev) => !prev);
```

For derived data — compute inline or with `useMemo`:
```tsx
const sortedItems = useMemo(
  () => orderBy(items, ["date"], ["desc"]),
  [items]
);
```

## Event Handler Naming

- Props: `onAction` (e.g., `onClick`, `onToggle`, `onSubmit`)
- Handlers: `handleAction` (e.g., `handleClick`, `handleToggle`)

```tsx
interface Props {
  onToggle: (value: boolean) => void;
}

const Switch = ({ onToggle }: Props) => {
  const handleChange = (checked: boolean) => {
    onToggle(checked);
  };
  return <RcSwitch onChange={handleChange} />;
};
```
