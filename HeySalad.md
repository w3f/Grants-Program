# HeySalad ® Tasha - An AI agent using 11Labs, Microsoft Azure and Polkadot.

## Project Overview

HeySalad ® Tasha is a conversational AI agent that helps reduce food waste through voice and chat interaction, built on Polkadot's blockchain technology. Users can engage with Tasha to log food waste reduction, receive personalized meal suggestions, and earn rewards through tokenized incentives.

Building on our existing platforms:
- Main website: https://heysalad.io/
- AI assistant: https://ai.heysalad.app/
- Nutritionist platform: https://nutritionists.heysalad.app/
- Previous dApp: https://dapp.saladhr.com/waste

## Project Details

### Problem Statement

Food waste is a global crisis with 1.3 billion tonnes wasted annually, contributing to 8% of global greenhouse emissions. In the UK alone, this represents £14 billion in value and £470 waste per household annually. Current solutions lack:

1. Natural conversational interfaces for easy food waste tracking
2. Location-aware meal recommendations to reduce waste
3. Verifiable incentive systems for sustainable behavior

### Solution: HeySalad ® Tasha

Our solution will enable conversations like:
> **User**: "Hey Tasha, what are we getting for Lunch?"  
> **Tasha**: "I can see there's a Chinese place in Soho not too far from the office."

Key features:
1. **Voice and chat interaction** using 11Labs voice technology
2. **Location-aware recommendations** through Google Maps integration
3. **Blockchain rewards** on Polkadot for sustainable food choices
4. **AI verification** of waste reduction powered by Microsoft Azure

### Why Polkadot?

We've chosen Polkadot's Asset-Hub because:
1. **Low transaction costs** make micro-rewards for small waste reduction viable
2. **Cross-chain compatibility** enables future integration with other sustainability projects
3. **Strong community** provides support for open-source development
4. **Growing ecosystem** aligns with our vision for expansion

## Team

**Peter Machona - CTO & Project Lead**
- 8+ years of technology leadership experience
- Microsoft Azure AI Engineer Associate certified
- Curtin Ignition & Accelerate Entrepreneurship and Innovation Programs- Curtin University, Perth Australia)
- 3x Hackathon Winner
- Easy A Cambridge Hackathon - Social Media Prize winner
- Email: peter@heysalad.io

## Milestones and Funding

### Milestone 1: Core Platform & Voice Integration - $5,000
**Deliverable deadline:** 2 weeks from grant approval

1. **Tasha Voice Assistant Integration**
   - Implement 11Labs voice technology for natural conversation
   - Develop core dialog flows for food waste logging
   - Deliverable: Working voice assistant interface

2. **Basic Token Minting System**
   - Implement FWT token contract on Asset-Hub
   - Create minting functionality for verified waste reduction
   - Deliverable: Deployed token contract with minting capability

3. **Monzo Integration for Purchase Verification**
   - Develop integration with Monzo API for transaction verification
   - Create system to validate food-related purchases
   - Deliverable: Working proof-of-concept for purchase verification

4. **Web dApp Interface**
   - Create conversational web interface
   - Implement basic dashboard for waste tracking
   - Deliverable: Functional dApp hosted on GitHub Pages

### Milestone 2: Enhanced Features & Integration - $5,000
**Deliverable deadline:** 2 weeks after Milestone 1 completion

1. **Advanced AI Verification System**
   - Enhance verification with Microsoft Azure AI
   - Implement image recognition for food waste tracking
   - Deliverable: Advanced AI verification system

2. **Wallet Integration & Rewards**
   - Develop wallet connection module for the dApp
   - Implement token rewards visualization
   - Deliverable: Full wallet integration with the platform

3. **Location-Based Features**
   - Integrate Google Maps for restaurant recommendations
   - Develop location-aware food waste reduction suggestions
   - Deliverable: Location-based recommendation system

4. **Leaderboard & NFT Achievements**
   - Implement community leaderboard for waste reduction
   - Create NFT rewards for milestone achievements
   - Deliverable: Working leaderboard and NFT minting system

## Technical Implementation Details

### Voice Integration with 11Labs

```javascript
// Voice conversation implementation
async function initializeTashaVoice() {
    // Initialize 11Labs voice API
    const tasha = new ElevenLabsVoice({
        voiceId: 'tasha-custom-voice',
        model: 'eleven_multilingual_v2'
    });
    
    // Create conversation handler
    return {
        async speak(message) {
            const audioStream = await tasha.textToSpeechStream(message);
            return playAudio(audioStream);
        },
        
        async listen() {
            const transcript = await recordAndTranscribe();
            return processUserInput(transcript);
        }
    };
}
```

### Token System Implementation

```solidity
// Food Waste Token contract
contract FoodWasteToken {
    // Basic token functionality with minting
    mapping(address => uint256) public balances;
    mapping(address => bool) public verifiers;
    
    function mint(address to, uint256 amount) external onlyVerifier {
        balances[to] += amount;
        emit Mint(to, amount);
    }
    
    // Verification functionality
    function verifyWasteReduction(
        address user,
        uint256 amount,
        string calldata wasteType
    ) external onlyVerifier returns (bool) {
        // Verification logic
        uint256 reward = calculateReward(amount, wasteType);
        mint(user, reward);
        return true;
    }
}
```

### AI Verification with Microsoft Azure

```typescript
// Microsoft Azure AI integration
class AzureVisionAnalyzer {
    constructor() {
        this.client = new ComputerVisionClient(
            new ApiKeyCredentials({ 
                inHeader: { 'Ocp-Apim-Subscription-Key': process.env.AZURE_API_KEY } 
            }),
            process.env.AZURE_ENDPOINT
        );
    }
    
    // Analyze food image for waste reduction verification
    async analyzeFoodImage(imageUrl) {
        const results = await this.client.analyzeImage(imageUrl, {
            visualFeatures: ['Categories', 'Tags', 'Objects'],
        });
        
        // Process results to identify food items
        return this.processFoodResults(results);
    }
    
    // Process results to extract food-specific information
    processFoodResults(results) {
        // Implementation of food detection algorithm
        // Return structured data about food items
    }
}
```

### Monzo Integration

```typescript
// Monzo Integration for purchase verification
class MonzoConnector {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.monzo.com';
    }
    
    // Verify food purchases for waste tracking
    async verifyFoodPurchase(accountId, transactionId) {
        const transaction = await this.getTransaction(accountId, transactionId);
        
        // Check if transaction is food-related
        if (this.isFoodPurchase(transaction)) {
            return {
                verified: true,
                amount: transaction.amount,
                merchant: transaction.merchant,
                timestamp: transaction.created
            };
        }
        
        return { verified: false };
    }
    
    // Determine if transaction is food-related
    isFoodPurchase(transaction) {
        // Implementation using transaction category and merchant data
        // Return boolean indicating if food-related
    }
}
```

## Budget Breakdown

### Milestone 1: $5,000
| Component | Hours | Rate | Total |
|-----------|-------|------|-------|
| Tasha Voice Assistant Integration | 40 | $40 | $1,600 |
| Basic Token Minting System | 30 | $40 | $1,200 |
| Monzo Integration | 30 | $40 | $1,200 |
| Web dApp Interface | 25 | $40 | $1,000 |
| **Total** | **125** | | **$5,000** |

### Milestone 2: $5,000
| Component | Hours | Rate | Total |
|-----------|-------|------|-------|
| Advanced AI Verification System | 35 | $40 | $1,400 |
| Wallet Integration & Rewards | 30 | $40 | $1,200 |
| Location-Based Features | 30 | $40 | $1,200 |
| Leaderboard & NFT Achievements | 30 | $40 | $1,200 |
| **Total** | **125** | | **$5,000** |

## Implementation Timeline

### Week 1-2 (Milestone 1)
- Days 1-5: Tasha voice integration with 11Labs
- Days 6-10: Token contract development and deployment
- Days 11-12: Monzo API integration
- Days 13-14: Web dApp development and testing

### Week 3-4 (Milestone 2)
- Days 15-18: Microsoft Azure AI verification system
- Days 19-22: Wallet integration and rewards visualization
- Days 23-25: Google Maps integration and location features
- Days 26-28: Leaderboard and NFT achievement system

## Benefits to the Polkadot Ecosystem

HeySalad ® Tasha will benefit the Polkadot ecosystem by:

1. **Bringing voice technology** to the Polkadot ecosystem through 11Labs integration
2. **Demonstrating real-world utility** with a practical food waste reduction application
3. **Creating open-source components** for voice interaction with blockchain
4. **Introducing NFT achievements** for sustainable behavior on Polkadot

## Future Plans & Sustainability

After completing the Fast Grant milestones, we plan to:

1. **Expand payment integrations** with Wise and Revolut
2. **Add food delivery integration** with Deliveroo
3. **Enhance conversational capabilities** for more natural interactions
4. **Develop mobile applications** with embedded voice assistant

Our vision is to create a future where users can order meals through natural conversation:
> "Hey Tasha, what are we getting for Lunch?"

While receiving personalized recommendations that reduce food waste and earn rewards on the Polkadot blockchain.

## Additional Information

### Progress to Date
- Developed multiple HeySalad platforms with active users
- Created proof-of-concept dApp from previous hackathon
- Established technology stack and development environment
- Initial experimentation with 11Labs voice technology

### Open Source Commitment
All code developed through this grant will be open-sourced under MIT license, enabling:
- Voice integration examples for the Polkadot community
- AI verification components for other sustainability projects
- NFT achievement templates for gamification
- Location-based recommendation systems

### Relevant Links
- Main Website: https://heysalad.io/
- AI Platform: https://ai.heysalad.app/
- Nutritionist Platform: https://nutritionists.heysalad.app/
- Previous dApp: https://dapp.saladhr.com/waste
- GitHub Repository: https://github.com/Hey-Salad/Tasha

HeySalad ® Tasha represents a unique opportunity to combine voice technology, AI, and blockchain to create a more sustainable food ecosystem. By bringing conversational AI to Polkadot, we're opening new possibilities for user interaction with blockchain technology in everyday life.
