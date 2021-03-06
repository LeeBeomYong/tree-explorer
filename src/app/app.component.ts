import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'angular-tree-component';

  focusedNodeName = null;
  focusedNodeColumnName = null;

  nodes = [
    {
      id: 1,
          name: '서버1',
          children: [
            { id: 8, 
              name: "graph_path",
              children: [
                {id: 9, name: "agens1"},
                {id: 10, name: "agens2"},
                {id: 11, name: "agens3", 
                children: [ 
                  { id: 12, name: "Vertex",
                    children: [
                      {id: 14, name: "Company"}, 
                      {id: 15, name: "Person"}
                    ]
                  }, {id: 13, name: "Edge",
                      children: [
                        {id: 16, name: "actor_in"},
                        {id: 17, name: "actress_in"},
                        {id: 18, name: "is_member_of"}
                      ]
                     }
                  ]
                }
              ]
            }
          ]
    }
  ];

  personColumns = [ {prop: '속성1'}, {prop: '속성2'}, {prop: '속성3'}, {prop: '속성4'}, {prop: '속성5'}];
  dataColumns_1 = [ {prop: '필드'}, {prop: '타입'}, {prop: '키'}, {prop: '설명'}, {prop: '널여부'}, {prop: '기본'}, {prop: '확장정보'}];
  vertexColumns = [{prop: '이름'}, {prop: '종류'}, {prop: '설명'}];
  edgeColumns = [{prop: '이름'}, {prop: '종류'}, {prop: '설명'}];
  tableColumns = [{prop: '이름'}, {prop: '종류'}, {prop: '설명'}];
  databaseColumns = [{prop: '데이터베이스명'}, {prop: '사용자'}, {prop: '비밀번호'}];
  serverColumns = [{prop: '호스트명'}, {prop: '포트번호'}, {prop: '데이터베이스명'}, {prop: '사용자'}, {prop: '비밀번호'}];

  personRows = [{속성1: '데이터1', 속성2: '데이터1', 속성3: '데이터1', 속성4: '데이터1', 속성5: '데이터1'}, 
              {속성1: '데이터1', 속성2: '데이터1', 속성3: '데이터1', 속성4: '데이터1', 속성5: '데이터1'},
              {속성1: '데이터1', 속성2: '데이터1', 속성3: '데이터1', 속성4: '데이터1', 속성5: '데이터1'},
              {속성1: '데이터1', 속성2: '데이터1', 속성3: '데이터1', 속성4: '데이터1', 속성5: '데이터1'}];

  dataRows_1 = [{필드: 'id', 타입: 'graphid', 널여부: 'NO'}, 
              {필드: 'start', 타입: 'graphid', 널여부: 'NO'}, 
              {필드: 'end', 타입: 'graphid', 널여부: 'NO'},
              {필드: 'properties', 타입: 'graphid', 널여부: 'NO'}];

  vertexRows = [{이름: 'vertex.company', 종류: 'vertex', 설명: '설명1'},
                {이름: 'vertex.person', 종류: 'vertex', 설명: '설명2'}];

  edgeRows = [{이름: 'edge.actor_in', 종류: 'edge', 설명: '설명2'},
              {이름: 'edge.actress_in', 종류: 'edge', 설명: '설명2'},
               {이름: 'edge.is_member_of', 종류: 'edge', 설명: '설명2'}];

  tableRows = [{이름: 'vertex.company', 종류: 'vertex', 설명: '설명1'},
                {이름: 'vertex.person', 종류: 'vertex', 설명: '설명2'},
                {이름: 'edge.actor_in', 종류: 'edge', 설명: '설명2'}, 
               {이름: 'edge.actress_in', 종류: 'edge', 설명: '설명2'},
               {이름: 'edge.is_member_of', 종류: 'edge', 설명: '설명2'}];

  databaseRows = [{데이터베이스명: 'agens1', 사용자: 'bylee1', 비밀번호: '1234'},
                  {데이터베이스명: 'agens2', 사용자: 'bylee2', 비밀번호: '1234'},
                  {데이터베이스명: 'agens3', 사용자: 'bylee3', 비밀번호: '1234'}];             

  serverRows = [{호스트명: '192.168.100.1', 포트번호: '6179', 데이터베이스명: 'agens1', 사용자: 'bylee1', 비밀번호: '1234'},
                  {호스트명: '192.168.100.1', 포트번호: '6179', 데이터베이스명: 'agens2', 사용자: 'bylee2', 비밀번호: '1234'},
                  {호스트명: '192.168.100.1', 포트번호: '6179', 데이터베이스명: 'agens3', 사용자: 'bylee3', 비밀번호: '1234'}];

  onInitialized(tree, $event){
    if(tree.treeModel.isExpanded) tree.treeModel.expandAll();

    //tree.treeModel.focusedNode.level == 1
    this.focusedNodeName = this.serverRows;
    this.focusedNodeColumnName = this.serverColumns;
  }


  onFocus(tree, $event) {
    if (tree.treeModel.focusedNode.level == 1){
      this.focusedNodeName = this.serverRows;
      this.focusedNodeColumnName = this.serverColumns;
    } else if (tree.treeModel.focusedNode.level == 2){
      this.focusedNodeName = this.databaseRows;
      this.focusedNodeColumnName = this.databaseColumns;
    } else if(tree.treeModel.focusedNode.level == 3) {
    //console.log("nodeName: "+tree.treeModel.focusedNode.data.name);
    //console.log("level:"+tree.treeModel.focusedNode.level);
      this.focusedNodeName = this.tableRows;
      this.focusedNodeColumnName = this.tableColumns;
      //console.log("aaa:"+this.focusedNodeColumnName[0].prop);
    } else if(tree.treeModel.focusedNode.level == 4) {
      if ( tree.treeModel.focusedNode.data.name == 'Vertex') {
        this.focusedNodeName = this.vertexRows;
        this.focusedNodeColumnName = this.vertexColumns;
      } else {
        this.focusedNodeName = this.edgeRows;
        this.focusedNodeColumnName = this.edgeColumns;
      }
    } else if (tree.treeModel.focusedNode.level == 5){
      //console.log("level:"+tree.treeModel.focusedNode.level);
      this.focusedNodeName = this.personRows;
      this.focusedNodeColumnName = this.personColumns;
    }
  }

  onActivate(tree, $event) {
    //console.dir(tree.treeModel);
    console.log("level:"+tree.treeModel.focusedNode.level);
    console.log("name:"+tree.treeModel.focusedNode.data.name);
    //this.nodes[1].children.push({id: 9, name: '새로운 자식노드'});
    //tree.treeModel.update();
    //console.log("name:"+tree.treeModel.nodes);
    //console.log("length:"+tree.treeModel.focusedNode.children.length);//focusedNode 대신에 nodes['1'] 가능
    //console.log("root:"+tree.treeModel.focusedNode.isRoot);
    //console.log("leaf:"+tree.treeModel.focusedNode.isLeaf);
  }

  rawEvent: MouseEvent;
  contextmenuRow: any;


  onContextMenu(contextMenuEvent) {
    console.log(contextMenuEvent);

    this.rawEvent = contextMenuEvent.event;
    this.contextmenuRow = contextMenuEvent.row;
    
    contextMenuEvent.event.preventDefault();
    contextMenuEvent.event.stopPropagation();
  }


}
