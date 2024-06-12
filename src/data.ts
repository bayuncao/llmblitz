import { type Node, type Edge, Position } from '@xyflow/svelte';

// 导入节点数据
import in_context_learning from "@nodes/modified_in_context_learning.json";
import writing_assistant from "@nodes/modified_writing_assistant.json";
import content_idea_creation from "@nodes/modified_content_idea_creation.json";
import generative_search_assistants from "@nodes/modified_generative_search_assistants.json";
import data_extraction_conversational_search from "@nodes/modified_data_extraction_conversational_search.json";
import developer_coding_assistants from "@nodes/modified_developer_coding_assistants.json";
import playgrounds from "@nodes/modified_playgrounds.json";
import autonomous_agent_ides from "@nodes/modified_autonomous_agent_ides.json";
import llm_api_build_frameworks from "@nodes/modified_llm_api_build_frameworks.json";
import prompt_engineering_tools from "@nodes/modified_prompt_engineering_tools.json";
import vector_stores_semantic_databases from "@nodes/modified_vector_stores_semantic_databases.json";
import operations_management from "@nodes/modified_operations_management.json";
import data_centric_tooling from "@nodes/modified_data_centric_tooling.json";
import models_hubs from "@nodes/modified_models_hubs.json";

// 导入边数据
import in_context_learning_edges from "@edges/in_context_learning_edges.json";
import writing_assistant_edges from "@edges/writing_assistant_edges.json";
import content_idea_creation_edges from "@edges/content_idea_creation_edges.json";
import generative_search_assistants_edges from "@edges/generative_search_assistants_edges.json";
import data_extraction_conversational_search_edges from "@edges/data_extraction_conversational_search_edges.json";
import developer_coding_assistants_edges from "@edges/developer_coding_assistants_edges.json";
import playgrounds_edges from "@edges/playgrounds_edges.json";
import autonomous_agent_ides_edges from "@edges/autonomous_agent_ides_edges.json";
import llm_api_build_frameworks_edges from "@edges/llm_api_build_frameworks_edges.json";
import prompt_engineering_tools_edges from "@edges/prompt_engineering_tools_edges.json";
import vector_stores_semantic_databases_edges from "@edges/vector_stores_semantic_databases_edges.json";
import operations_management_edges from "@edges/operations_management_edges.json";
import data_centric_tooling_edges from "@edges/data_centric_tooling_edges.json";
import models_hubs_edges from "@edges/models_hubs_edges.json";

// 初始化节点数据
// @ts-ignore
const initialNodes: Node[] = [
  ...in_context_learning,
  ...writing_assistant,
  ...content_idea_creation,
  ...generative_search_assistants,
  ...data_extraction_conversational_search,
  ...developer_coding_assistants,
  ...playgrounds,
  ...autonomous_agent_ides,
  ...llm_api_build_frameworks,
  ...prompt_engineering_tools,
  ...vector_stores_semantic_databases,
  ...operations_management,
  ...data_centric_tooling,
  ...models_hubs
];

// 初始化边数据
const initialEdges: Edge[] = [
  ...in_context_learning_edges,
  ...writing_assistant_edges,
  ...content_idea_creation_edges,
  ...generative_search_assistants_edges,
  ...data_extraction_conversational_search_edges,
  ...developer_coding_assistants_edges,
  ...playgrounds_edges,
  ...autonomous_agent_ides_edges,
  ...llm_api_build_frameworks_edges,
  ...prompt_engineering_tools_edges,
  ...vector_stores_semantic_databases_edges,
  ...operations_management_edges,
  ...data_centric_tooling_edges,
  ...models_hubs_edges
];
const position = { x: 0, y: 0 }; // 初始位置，可以根据需要调整
const firstLevelSpacingX = 500; // 一级节点的水平间距
const secondLevelSpacingX = 200;  // 二级节点相对于一级节点的水平间距
const secondLevelSpacingY = 80;  // 二级节点的垂直间距

// 找出所有一级节点的数量
const firstLevelNodes = initialNodes.filter(node => !node.id.includes("-"));
const firstLevelNodeCount = firstLevelNodes.length;

// 设置一级节点的位置
firstLevelNodes.forEach((node, index) => {
  node.sourcePosition = Position.Right;
  node.position = {
    x: position.x + index * firstLevelSpacingX,
    y: position.y // 所有一级节点在同一水平线上
  };
});

// 设置二级节点的位置
initialNodes.forEach((node, index) => {
  if (node.id.includes("-")) {
    node.sourcePosition = Position.Right;
    node.targetPosition = Position.Left;
    // 找到对应的一级节点的位置
    const parentNodeId = node.id.split("-")[0];
    const parentNode = initialNodes.find(n => n.id === parentNodeId);

    if (parentNode) {
      const secondLevelIndex = initialNodes.filter(n => n.id.includes(`${parentNodeId}-`)).indexOf(node);
      node.position = {
        x: parentNode.position.x + secondLevelSpacingX,
        y: parentNode.position.y + secondLevelIndex * secondLevelSpacingY // 在对应一级节点右侧垂直排列
      };
    }
  }
});
// 导出节点和边
export { initialNodes, initialEdges };