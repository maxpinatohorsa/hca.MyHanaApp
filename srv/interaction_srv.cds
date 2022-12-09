using app.interactions from '../db/interactions'; 

service CatalogService { 
	
	entity Interactions_Header 
		as projection on interactions.Interactions_Header; 
		
	entity Interactions_Items as projection 
		on interactions.Interactions_Items; 

	entity Table_Test as projection 
		on interactions.Table_Test; 		
		
	function sleep()  returns Boolean;
	function testSomething() returns Boolean;
}