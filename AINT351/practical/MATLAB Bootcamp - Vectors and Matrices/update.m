function [ M ] = update( M, I )

    % want to update the maximum of that row
    % function should return a copy of M where the maximum value in the
    % given row has been multipled by 1.2
    
    % Assign the max value that you have the index for "I"
    % To itself multipled by 1.2
    M(I) = (M(I) * 1.2);
    
end

