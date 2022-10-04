
/*  3rd QUESTION.
   
An e-commerce site tracks the purchases made each day. The product that is purchased
the most one day is the featured product for the following day. If there is a tie for the product
purchased most frequently, those product names are ordered alphabetically ascending and
the last name in the list is chosen.[Amazon]
['yellowShirt', 'redHat', 'blackShirt', 'bluePants', 'redHat','pinkHat', 'blackShirt', 'yellowShirt',
'greenPants', 'greenPants', 'greenPants'] */

import java.util.*;    
public class Main {

public static void main(String[] args) {
	
	  List<String> list  = new ArrayList<String>();
	  
        list.add("YellowShirt");
        list.add("redHat");
        list.add("blacShirt");
        list.add("bluePants");
        list.add("redHat");
        list.add("pinkHat");
        list.add("blackShirt");
        list.add("yellowShirt");
        list.add("greenPants");
        list.add("greenPants");
        list.add("greenPants");
	  
	  String trm = trackMax(list);
	  System.out.println(trm);
}

public static String trackMax(List<String> str) {
	 List<String> list  = new ArrayList<String>();
	 
	 Collections.sort(str);
	 int freq=0;
	 
	 Map<String , Integer> map = new HashMap<String, Integer>();
	 
	 for(String s1 : str) {
		 if(map.containsKey(s1)) {
			 map.put(s1, map.get(s1)+1);
		 }
		 else {
			 map.put(s1, 1);
			 
		 } 
		 
		 for(String s2 : map.keySet()) {
			 int count = map.get(s2);
			 if(count>freq)
				 freq=count;
			 
		 }
		 
		 for(String s3 : map.keySet()) {
			 if(map.get(s3)==freq) {
				 list.add(s3);
			 }
		 }
		 Collections.sort(list);
		 
	 }
	 
	return list.get(list.size()-1);
  }
}
