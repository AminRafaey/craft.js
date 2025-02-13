export declare const ROOT_NODE = 'ROOT';
export declare const DEPRECATED_ROOT_NODE = 'canvas-ROOT';
export declare const ERROR_NOPARENT = 'Parent id cannot be ommited';
export declare const ERROR_DUPLICATE_NODEID =
  'Attempting to add a node with duplicated id';
export declare const ERROR_INVALID_NODEID =
  'Node does not exist, it may have been removed';
export declare const ERROR_TOP_LEVEL_ELEMENT_NO_ID =
  'A <Element /> that is used inside a User Component must specify an `id` prop, eg: <Element id="text_element">...</Element> ';
export declare const ERROR_MISSING_PLACEHOLDER_PLACEMENT =
  'Placeholder required placement info (parent, index, or where) is missing';
export declare const ERROR_MOVE_CANNOT_DROP =
  'Node cannot be dropped into target parent';
export declare const ERROR_MOVE_INCOMING_PARENT =
  'Target parent rejects incoming node';
export declare const ERROR_MOVE_OUTGOING_PARENT =
  'Current parent rejects outgoing node';
export declare const ERROR_MOVE_NONCANVAS_CHILD =
  'Cannot move node that is not a direct child of a Canvas node';
export declare const ERROR_MOVE_TO_NONCANVAS_PARENT =
  'Cannot move node into a non-Canvas parent';
export declare const ERROR_MOVE_TOP_LEVEL_NODE =
  'A top-level Node cannot be moved';
export declare const ERROR_MOVE_ROOT_NODE = 'Root Node cannot be moved';
export declare const ERROR_MOVE_TO_DESCENDANT =
  'Cannot move node into a descendant';
export declare const ERROR_NOT_IN_RESOLVER =
  'The component type specified for this node (%node_type%) does not exist in the resolver';
export declare const ERROR_INFINITE_CANVAS =
  "The component specified in the <Canvas> `is` prop has additional Canvas specified in it's render template.";
export declare const ERROR_CANNOT_DRAG =
  'The node has specified a canDrag() rule that prevents it from being dragged';
export declare const ERROR_INVALID_NODE_ID =
  'Invalid parameter Node Id specified';
export declare const ERROR_DELETE_TOP_LEVEL_NODE =
  'Attempting to delete a top-level Node';
export declare const ERROR_RESOLVER_NOT_AN_OBJECT =
  'Resolver in <Editor /> has to be an object. For (de)serialization Craft.js needs a list of all the User Components. \n    \nMore info: https://craft.js.org/r/docs/api/editor#props';
export declare const ERROR_DESERIALIZE_COMPONENT_NOT_IN_RESOLVER =
  'An Error occurred while deserializing components: Cannot find component <%displayName% /> in resolver map. Please check your resolver in <Editor />\n\nAvailable components in resolver: %availableComponents%\n\nMore info: https://craft.js.org/r/docs/api/editor#props';
export declare const ERROR_USE_EDITOR_OUTSIDE_OF_EDITOR_CONTEXT =
  'You can only use useEditor in the context of <Editor />. \n\nPlease only use useEditor in components that are children of the <Editor /> component.';
export declare const ERROR_USE_NODE_OUTSIDE_OF_EDITOR_CONTEXT =
  'You can only use useNode in the context of <Editor />. \n\nPlease only use useNode in components that are children of the <Editor /> component.';
