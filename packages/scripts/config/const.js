// const dayjs = require('dayjs');
const path = require('path');
const VUE_TITILE_MAP = require('./language/api-docs-title');
const { COMPONENT_API_MD_MAP, TYPES_COMBINE_MAP, GLOBAL_COMPONENTS_CONFIG } = require('./files-combine');

// common 数据类型，用于引入具体的组件类型定义文件中
const GLOBAL_TYPES = [
  'TNode',
  'TNodeReturnValue',
  'TElement',
  'TreeOptionData',
  'OptionData',
  'SizeEnum',
  'HorizontalAlignEnum',
  'VerticalAlignEnum',
  'ClassName',
  'Classes',
  'CSSSelector',
  'Styles',
  'AttachNode',
  'ScrollContainer',
  'FormResetEvent',
  'FormSubmitEvent',
  'KeysType',
  'HTMLElementAttributes',
  'ComponentType',
  'InfinityScroll',
  'UploadDisplayDragEvents',
];

// InputEvent is not included in SyntheticEvent, but SyntheticEvent includes FormEvent
// FormEvent comes from onChange/onInput/onInvalid/onReset/onSubmit .etc.
const REACT_EVENTS = ['MouseEvent', 'KeyboardEvent', 'ClipboardEvent', 'FocusEvent', 'WheelEvent', 'FormEvent', 'TransitionEvent', 'ChangeEvent', 'DragEvent', 'CompositionEvent'];
const REACT_TYPES = ['CSSProperties'].concat(REACT_EVENTS);

const [component, framework, allParams] = process.argv.slice(2);
// const { finalProject } = parseParams(allParams);
const finalProject = allParams && allParams.includes('finalProject');

module.exports = {
  GLOBAL_TYPES,
  REACT_EVENTS,
  REACT_TYPES,
  FILE_RIGHTS_DESC: [
    '/**',
    '该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC',
    '*/'].join('\n * '),
  TNode: 'TNode',
  // 这里配置好之后，可以在 API 文档中显示「查看通用类型定义」
  TDESIGN_GLOBALS: ['TNode', 'Styles',  'ClassName', 'CSSSelector', 'AttachNode', 'OptionData', 'TreeOptionData', 'SizeEnum', 'HorizontalAlignEnum', 'VerticalAlignEnum', 'KeysType', 'ComponentType', 'InfinityScroll'],
  // 真实路径，默认为当前项目，finalProject 值为 true，则表示直接输出到项目中，方便快速测试类型定义
  BASE_PATH_URL: finalProject
    ? path.resolve(process.cwd(), '../')
    : path.resolve(process.cwd(), './packages/products'),
  BASE_PATH_URL_LOCAL: path.resolve(process.cwd(), '../'),
  // 开发或者测试路径
  // BASE_PATH_URL: '.',
  VUE_TITILE_MAP,
  COMPONENT_API_MD_MAP,
  TYPES_COMBINE_MAP,
  GLOBAL_COMPONENTS_CONFIG,
};
