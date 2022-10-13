# TeleTr4ck

This script is part of a personal reseach project to track when people open a site. 

-Synfinner 

Would it be easier to import things like jQuery? Abosulutely. The biggest thing here is that we want to limit overall size as well as limit how many external connections we are making. Best case scenario is sending data within the same domain scope.

## Idea

I wanted to track when users would go to a particular section of a site. In this case, very very few people should ever go there. This script has some bunk functions in it as well as checks to see if the incoming browser is potentially headless. In addition to seeing if cookies are enabled or not, this script also attempts to see if the DOM can be modified. If not, just redirect. 

There are a lot of other features that I'd like to mess with/add. Hopefully I'll get some time and make them :D 

PRs are more than welcome :) 