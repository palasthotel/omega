( function( wp, $ ) {
	    
    var OmegaButton = function( props ) {
        return wp.element.createElement(
            wp.editor.RichTextToolbarButton, {
                icon: 'editor-customchar',
                title: 'Omega',
                onClick: function() {
	                
	                 var chosenChar = "€";
	                 
	                 // First: Add the Charmap
	  
	                
					// And show it 
	                 $('#omega').show();
	                 
	                 // Second: Make it hideable
	                 $('.omega-hide').click(function(){ $('#omega').hide()});
	                
					$('#omega td').mouseover(function(){
						var overed = $(this);
						$('#omega-highlight .omega-character').html($(overed).children().html());
						$('#omega-highlight .omega-description').html(overed.attr('title'));					
						
					});
					
					$('#omega td').click(function(){
						var overed = $(this);
						chosenChar = $(overed).children().html();
						props.onChange(            		
	                			wp.richText.insert(props.value, chosenChar)	                		                	
						);
						$('#omega').hide();

					});
						

	                
	                
	                
					// Finally: Insert the chossen Character 
	            			                
                },
            }
        );
    }
    
    
    
    wp.richText.registerFormatType(
        'omega/sample-output', {
            title: 'Sample output',
            tagName: 'samp',
            className: null,
            edit: OmegaButton,
        }
    );
    
    
    
} )( window.wp, jQuery );




