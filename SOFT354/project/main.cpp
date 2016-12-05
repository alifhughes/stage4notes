#include <SDL2/SDL.h>
#include <iostream>

#define NUM_PARTICLES 1000
#define SCREEN_W 600
#define SCREEN_H 600
#define LINE_LEN 5
#define SPEED 1.0f
#define RADIUS 0.25f
#define PHASE_LAG 1.53f
#define COUPLING 1.0f
#define DT 0.1f

// Define radius squared
const float RADIUS_SQRT = RADIUS*RADIUS;


/*
 * QUS
 * - multiprocess and multithreaded or just multiprocess and update a particle per process
 * - what is dphi? direction
 */

/*
 * Struct for each particle contains:
 *  - x
 *  - y
 *  - phi direction phi is angle in radions
 */
typedef struct {
    float x, y, phi;
} particle_struct;

void updateParticles(particle_struct* particles) {

    // Get the particle to be updated

    // Iterate all particles
    //  get their position in relation to current particle
    //  check if it is in the radius and there for is close
    //      update direction 
    //      update near count

    // update x and y positions

    // wrap around at the edges

    // update direction if there were any interations

    // write back updated properties
}

int main(int argc, char** argv) {

    // Create array for particles
    particle_struct* particles;

    // Initialise random positions and direction
    for (int i = 0; i < NUM_PARTICLES; i++)
    {
        particles[i].x = (float)rand() / (float)RAND_MAX;
        particles[i].y = (float)rand() / (float)RAND_MAX;
        particles[i].phi = ((float)rand() / (float)RAND_MAX) * 2 * M_PI;
    }

    // Create SDL window
    if (SDL_Init(SDL_INIT_EVERYTHING) < 0) {
        perror("Error initializing SDL.");
        exit(1);
    }
    SDL_Window* window = SDL_CreateWindow("Vicsek",
      SDL_WINDOWPOS_UNDEFINED,
      SDL_WINDOWPOS_UNDEFINED,
      SCREEN_W, SCREEN_H,
      SDL_WINDOW_OPENGL);

    SDL_Renderer* renderer = SDL_CreateRenderer(window, -1, 0);

    // Start SDL event
    SDL_Event event;
    int running = 1;
    int prePause = 2;
    while(running)
    {

        // Update the particles
        updateParticles(particles);


        // Copy back particles

        // Draw particles
        SDL_RenderClear(renderer);
        for (int i = 0; i < NUM_PARTICLES; i++)
        {
            SDL_RenderDrawLine(renderer,
               particles[i].x*SCREEN_W,
               particles[i].y*SCREEN_H,
               particles[i].x*SCREEN_W + LINE_LEN*cos(particles[i].phi),
               particles[i].y*SCREEN_H + LINE_LEN*sin(particles[i].phi));
        }
        SDL_RenderPresent(renderer);
    }
    return 0;
}
