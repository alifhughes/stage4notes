function playTurns(noOfTurns)

    % Get global variable
    global playerLocation;

    % Define pre location text
    preOutputText = 'You are';
    
    % Switch on players location and assign string accordingly
    switch (playerLocation) 
        case (0)
            specificLocation = ' by a babbling brook'; 
        case (1)
            specificLocation = ' high in some misty mountains';
        case (2) 
            specificLocation = ' in a sunny field';
        case (3)
            specificLocation = ' under a great oak';
        otherwise
            specificLocation = ' lost';
    end;

    % Concanenate the pre text and location together
    descriptionOfLocation = strcat(preOutputText, specificLocation);
    
    
    for n = 1:noOfTurns
        
        % Display the output
        disp(descriptionOfLocation);
        
    end
end

